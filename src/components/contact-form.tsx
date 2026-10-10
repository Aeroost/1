"use client";

import { useState, type FormEvent } from "react";
import { cn } from "@/lib/format";
import { IconCheck, IconChevronDown, IconShield } from "./icons";

const MIN_MESSAGE = 20;
const MAX_MESSAGE = 4000;

export interface ContactFormProps {
  labels: {
    title: string;
    intro: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    topic: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    submitting: string;
    optional: string;
    privacy: string;
    counter: string;
    success: { title: string; body: string; another: string };
    errors: { name: string; email: string; message: string; form: string; generic: string; rate: string };
  };
  topics: { value: string; label: string }[];
  successTitle?: string;
}

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

function validate(values: { name: string; email: string; message: string }): FieldErrors {
  const errors: FieldErrors = {};
  if (values.name.trim().length < 2) errors.name = "name";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) errors.email = "email";
  if (values.message.trim().length < MIN_MESSAGE) errors.message = "message";
  return errors;
}

/**
 * Posts to the project's own /api/inquiries endpoint. Validation runs on submit
 * and then per field, messages are announced politely, and the honeypot is
 * labelled so assistive technology never sees it.
 */
export function ContactForm({ labels, topics }: ContactFormProps) {
  const [values, setValues] = useState({ name: "", email: "", topic: topics[0]?.value ?? "other", message: "" });
  const [errorKeys, setErrorKeys] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [honeypot, setHoneypot] = useState("");

  const errorFor = (key: keyof FieldErrors) => (errorKeys[key] ? labels.errors[errorKeys[key] as keyof typeof labels.errors] : undefined);

  const update = (key: keyof typeof values) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const next = { ...values, [key]: event.target.value };
    setValues(next);
    if (errorKeys[key as keyof FieldErrors]) {
      setErrorKeys((current) => ({ ...current, [key]: validate(next)[key as keyof FieldErrors] }));
    }
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const errors = validate(values);
    setErrorKeys(errors);
    if (Object.keys(errors).length > 0) {
      setFormError(labels.errors.form);
      document.getElementById("inquiry-name")?.focus();
      return;
    }
    setFormError(null);
    setStatus("submitting");

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...values, message: values.message.trim(), trap: honeypot }),
      });
      const data = (await response.json().catch(() => ({}))) as { ok?: boolean; code?: "rate" | "invalid" | "generic" };
      if (!response.ok || !data.ok) {
        setStatus("idle");
        setFormError(data.code === "rate" ? labels.errors.rate : labels.errors.generic);
        return;
      }
      setStatus("success");
      setValues({ name: "", email: "", topic: topics[0]?.value ?? "other", message: "" });
    } catch {
      setStatus("idle");
      setFormError(labels.errors.generic);
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-lg border border-ok/40 bg-ok-soft p-6">
        <span aria-hidden="true" className="inline-flex size-9 items-center justify-center rounded-md border border-ok/40 bg-surface text-ok">
          <IconCheck className="size-[18px]" />
        </span>
        <h3 className="mt-3.5 text-h3 font-semibold text-ink">{labels.success.title}</h3>
        <p className="mt-1.5 text-body text-ink-muted">{labels.success.body}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 inline-flex items-center gap-2 rounded-md border border-line bg-surface px-3 py-1.5 text-[0.84rem] text-ink transition-colors hover:border-line-strong"
        >
          {labels.success.another}
        </button>
      </div>
    );
  }

  const remaining = values.message.trim().length;
  const showCounter = remaining < MIN_MESSAGE;

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-lg border border-line bg-surface p-5 shadow-[var(--shadow-card)] sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-h3 font-semibold text-ink">{labels.title}</h2>
          <p className="mt-1.5 text-small text-ink-muted">{labels.intro}</p>
        </div>
        <span aria-hidden="true" className="hidden size-9 items-center justify-center rounded-md border border-line text-accent sm:inline-flex">
          <IconShield className="size-[18px]" />
        </span>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field id="inquiry-name" label={labels.name} error={errorFor("name")} required>
          <input
            id="inquiry-name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={update("name")}
            placeholder={labels.namePlaceholder}
            maxLength={120}
            aria-invalid={errorFor("name") ? true : undefined}
            aria-describedby={errorFor("name") ? "inquiry-name-error" : undefined}
            className="field"
          />
        </Field>

        <Field id="inquiry-email" label={labels.email} error={errorFor("email")} required>
          <input
            id="inquiry-email"
            name="email"
            type="email"
            dir="ltr"
            autoComplete="email"
            value={values.email}
            onChange={update("email")}
            placeholder={labels.emailPlaceholder}
            maxLength={320}
            aria-invalid={errorFor("email") ? true : undefined}
            aria-describedby={errorFor("email") ? "inquiry-email-error" : undefined}
            className="field ltr-value text-start"
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field id="inquiry-topic" label={labels.topic} optionalLabel={labels.optional}>
          <div className="relative">
            <select
              id="inquiry-topic"
              name="topic"
              value={values.topic}
              onChange={update("topic")}
              className="field pe-9"
            >
              {topics.map((topic) => (
                <option key={topic.value} value={topic.value}>
                  {topic.label}
                </option>
              ))}
            </select>
            <IconChevronDown
              aria-hidden
              className="pointer-events-none absolute inset-y-0 end-3 my-auto size-4 text-ink-subtle rtl:rotate-0"
            />
          </div>
        </Field>
      </div>

      <div className="mt-5">
        <Field
          id="inquiry-message"
          label={labels.message}
          error={errorFor("message")}
          required
          hint={showCounter ? labels.counter.replace("{count}", String(remaining)).replace("{min}", String(MIN_MESSAGE)) : undefined}
        >
          <textarea
            id="inquiry-message"
            name="message"
            rows={6}
            value={values.message}
            onChange={update("message")}
            placeholder={labels.messagePlaceholder}
            maxLength={MAX_MESSAGE}
            aria-invalid={errorFor("message") ? true : undefined}
            aria-describedby={cn(showCounter && "inquiry-message-hint", errorFor("message") && "inquiry-message-error")}
            className="field resize-y min-h-32"
          />
        </Field>
      </div>

      {/* Honeypot: hidden from people, obvious to bots. */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor="inquiry-trap">website</label>
        <input id="inquiry-trap" name="trap" type="text" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(event) => setHoneypot(event.target.value)} />
      </div>

      {formError ? (
        <p role="alert" className="mt-5 flex items-start gap-2 rounded-md border border-danger/40 bg-danger-soft px-3 py-2 text-small text-danger">
          <span aria-hidden="true" className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-danger" />
          {formError}
        </p>
      ) : null}

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className={cn(
            "group inline-flex items-center gap-2 rounded-md bg-accent-solid px-4 py-2.5 text-[0.9rem] font-semibold text-accent-on transition-[transform,filter,opacity] duration-[var(--duration-fast)]",
            "hover:-translate-y-px hover:brightness-[1.08] disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0",
          )}
        >
          {status === "submitting" ? labels.submitting : labels.submit}
        </button>
        <p className="m-0 max-w-sm text-[0.78rem] leading-relaxed text-ink-subtle">{labels.privacy}</p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  hint,
  required,
  optionalLabel,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
  optionalLabel?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mono-label flex items-center gap-1.5 text-ink-subtle">
        {label}
        {required ? (
          <span aria-hidden="true" className="text-accent">
            *
          </span>
        ) : optionalLabel ? (
          <span className="text-[0.68rem] font-normal normal-case tracking-normal text-ink-subtle">({optionalLabel})</span>
        ) : null}
      </label>
      <div className="mt-1.5">{children}</div>
      {hint ? (
        <p id={`${id}-hint`} className="m-0 mt-1.5 text-[0.76rem] text-ink-subtle">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} role="alert" className="m-0 mt-1.5 text-[0.8rem] font-medium text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}
