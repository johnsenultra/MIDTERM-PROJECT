import { Next, Context, Hono } from "hono";

const app = new Hono();

export const middleware = async (c: Context, next: Next) => {
   console.log("Middleware is working");
   await next();
};
export default app;