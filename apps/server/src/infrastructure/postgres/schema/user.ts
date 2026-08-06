import {
  pgTable,
  uuid,
  varchar,
  timestamp,
} from "drizzle-orm/pg-core";


export const users = pgTable("users", {
  id: uuid("id")
    .defaultRandom()
    .primaryKey(),

  username: varchar("username", {
    length: 20,
  })
    .notNull()
    .unique(),

  email: varchar("email", {
    length: 255,
  })
    .unique(),

  passwordHash: varchar("password_hash", {
    length: 255,
  }),

  createdAt: timestamp("created_at")
    .defaultNow()
    .notNull(),
});

