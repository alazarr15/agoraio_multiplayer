import {
  pgTable,
  uuid,
  integer,
} from "drizzle-orm/pg-core";


import { users } from "./user";


export const leaderboard = pgTable(
  "leaderboard",
  {

    id: uuid("id")
      .defaultRandom()
      .primaryKey(),


    userId: uuid("user_id")
      .notNull()
      .references(() => users.id),


    highestScore: integer("highest_score")
      .default(0)
      .notNull(),


    gamesWon: integer("games_won")
      .default(0)
      .notNull(),

  }
);