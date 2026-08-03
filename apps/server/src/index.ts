import {serve} from "bun";
import app from "./app/app";

const port = 3000;

serve({
    fetch: app.fetch,
    port,
})  


console.log(`Server is Running on http://localhost:${port}`);