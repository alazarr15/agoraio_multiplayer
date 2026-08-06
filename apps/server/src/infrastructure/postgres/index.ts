import { drizzle } from "drizzle-orm/postgres-js";
import { connectionString } from "./client";
import {relations} from "./relations"



if (!connectionString) {
  throw new Error("DATABASE_URL is missing");
}

export const db = drizzle(
  connectionString,
  {
    relations,
  }
);