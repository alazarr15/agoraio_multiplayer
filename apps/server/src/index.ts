import {serve} from "bun";
import app from "./app/app";
import type { player } from "@cell-clash/shared";

const port = 3000;

serve({
    fetch: app.fetch,
    port,
})  

const player: player = {
  id: "1",
  username: "Alazar",
  position: {
    x: 0,
    y: 0
  },
  radius: 20,
  score: 0
};


console.log(`Server is Running on http://localhost:${port}`);