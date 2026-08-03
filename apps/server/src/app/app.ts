import {Hono} from "hono";

const app = new Hono(); // created object instance from imported Hono class

app.get("/", (c) => {
   return c.json({
        message: "Hello from Hono runs on Bun!"
   })
})


export default app;
