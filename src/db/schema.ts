import { pgTable, uuid, text, timestamp, index, varchar } from "drizzle-orm/pg-core";

/**
 * Inquiries submitted from the Contact page. Stored in the project's own
 * database so a reply can be sent; nothing is forwarded to third parties.
 */
export const inquiries = pgTable(
  "inquiries",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name", { length: 120 }).notNull(),
    email: varchar("email", { length: 320 }).notNull(),
    topic: varchar("topic", { length: 40 }).notNull(),
    message: text("message").notNull(),
    locale: varchar("locale", { length: 8 }).notNull().default("en"),
    /** Stored only so repeated submissions can be throttled; never displayed. */
    sourceIp: varchar("source_ip", { length: 64 }),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [index("inquiries_created_at_idx").on(table.createdAt)],
);

export type InquiryInsert = typeof inquiries.$inferInsert;
