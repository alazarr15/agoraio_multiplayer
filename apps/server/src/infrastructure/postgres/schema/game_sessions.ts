import {
  pgTable,
  uuid,
  varchar,
  timestamp,
  integer,
} from "drizzle-orm/pg-core";


export const gameSessions = pgTable(
  "game_sessions",
  {

    id: uuid("id")
      .defaultRandom()
      .primaryKey(),


    status: varchar("status", {
      length: 20,
    })
      .notNull()
      .default("waiting"),


    maxPlayers: integer("max_players")
      .default(50)
      .notNull(),


    startedAt: timestamp("started_at"),


    endedAt: timestamp("ended_at"),


    createdAt: timestamp("created_at")
      .defaultNow()
      .notNull(),

  }
);