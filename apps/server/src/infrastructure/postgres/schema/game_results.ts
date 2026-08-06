import {
  pgTable,
  uuid,
  integer,
} from "drizzle-orm/pg-core";


import { gameSessions } from "./game_sessions";
import { users } from "./user";


export const gameResults = pgTable(
  "game_results",
  {

    id: uuid("id")
      .defaultRandom()
      .primaryKey(),


    gameId: uuid("game_id")
      .notNull()
      .references(() => gameSessions.id),


    winnerId: uuid("winner_id")
      .references(() => users.id),


    score: integer("score")
      .notNull(),

  }
);