import {
  pgTable,
  uuid,
  integer,
  boolean,
} from "drizzle-orm/pg-core";


import { users } from "./user";
import { gameSessions } from "./game_sessions";


export const gamePlayers = pgTable(
  "game_players",
  {

    id: uuid("id")
      .defaultRandom()
      .primaryKey(),


    gameId: uuid("game_id")
      .notNull()
      .references(() => gameSessions.id),


    userId: uuid("user_id")
      .notNull()
      .references(() => users.id),


    finalMass: integer("final_mass")
      .default(0),


    score: integer("score")
      .default(0),


    alive: boolean("alive")
      .default(true),

  }
);