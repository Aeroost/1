import { NextResponse } from "next/server";
import { sql } from "drizzle-orm";
import { db } from "@/db";
import { inquiries } from "@/db/schema";
import { defaultLocale, isLocale } from "@/i18n/config";

export const dynamic = "force-dynamic";

const MIN_MESSAGE = 20;
const MAX_MESSAGE = 4000;
const MAX_WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

/**
 * Small in-process throttle. It is deliberately simple: this endpoint accepts
 * short text, stores it in the project database and is not a public broadcast
 * channel. A deploy in front of a shared cache should add platform rate
 * limiting as well.
 */
const attempts = new Map<string, number[]>();

function throttle(key: string): boolean {
  const now = Date.now();
  const recent = (attempts.get(key) ?? []).filter((at) => now - at < MAX_WINDOW_MS);
  recent.push(now);
  attempts.set(key, recent);
  if (attempts.size > 5000) {
    for (const [candidate, times] of attempts) {
      if (!times.some((at) => now - at < MAX_WINDOW_MS)) attempts.delete(candidate);
    }
  }
  return recent.length > MAX_PER_WINDOW;
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const TOPICS = ["project", "reuse", "feedback", "security", "other"] as const;

function clean(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max).replace(/\s*\n\s*/g, "\n") : "";
}

export async function POST(request: Request) {
  let payload: Record<string, unknown> = {};
  try {
    const body = await request.json();
    if (body && typeof body === "object") payload = body as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, code: "generic" }, { status: 400 });
  }

  // Honeypot: answer as if it worked so bots never learn they were caught.
  if (clean(payload.trap, 20).length > 0) {
    return NextResponse.json({ ok: true });
  }

  const forwarded = request.headers.get("x-forwarded-for");
  const ip = (forwarded?.split(",")[0] ?? "unknown").trim().slice(0, 64) || "unknown";
  if (throttle(ip)) {
    return NextResponse.json({ ok: false, code: "rate" }, { status: 429 });
  }

  const name = clean(payload.name, 120);
  const email = clean(payload.email, 320);
  const message = clean(payload.message, MAX_MESSAGE);
  const topicRaw = clean(payload.topic, 40);
  const topic = (TOPICS as readonly string[]).includes(topicRaw) ? topicRaw : "other";
  const localeRaw = clean(payload.locale, 8);

  if (name.length < 2 || !EMAIL.test(email) || message.length < MIN_MESSAGE) {
    return NextResponse.json({ ok: false, code: "invalid" }, { status: 422 });
  }

  try {
    await db.insert(inquiries).values({
      name,
      email,
      topic,
      message,
      locale: isLocale(localeRaw) ? localeRaw : defaultLocale,
      sourceIp: ip,
    });
  } catch (error) {
    console.error("inquiry write failed", error);
    return NextResponse.json({ ok: false, code: "generic" }, { status: 503 });
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}

export async function GET() {
  // Keep the endpoint honest: form submissions are the only supported verb.
  const allow = new Headers({ allow: "POST, OPTIONS" });
  const dbOk = await db
    .execute(sql`select 1`)
    .then(() => true)
    .catch(() => false);
  return NextResponse.json(
    { ok: true, endpoint: "/api/inquiries", method: "POST", database: dbOk },
    { status: 405, headers: allow },
  );
}
