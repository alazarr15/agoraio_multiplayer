import { defineConfig } from "drizzle-kit";


export default defineConfig({

  dialect: "postgresql",

  schema:
    "./src/infrastructure/postgres/schema/*.ts",

  out:
    "./src/infrastructure/postgres/migrations",


  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },

});