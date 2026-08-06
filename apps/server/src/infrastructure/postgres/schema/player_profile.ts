import {
  pgTable,
  uuid,
  integer,
  timestamp,
} from "drizzle-orm/pg-core";

import { users } from "./user";


export const playerStats = pgTable(
  "player_stats",
  {
    id: uuid("id")
      .defaultRandom()
      .primaryKey(),

    userId: uuid("user_id")
      .references(() => users.id)
      .notNull(),

    gamesPlayed: integer(
      "games_played"
    )
      .default(0)
      .notNull(),

    gamesWon: integer(
      "games_won"
    )
      .default(0)
      .notNull(),

    highestMass: integer(
      "highest_mass"
    )
      .default(0)
      .notNull(),

    createdAt: timestamp(
      "created_at"
    )
      .defaultNow()
      .notNull(),
  }
);