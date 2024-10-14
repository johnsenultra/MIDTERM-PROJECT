import { z } from 'zod';
import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';
import bcrypt from 'bcrypt'

export const hashPassword = new Hono();

// Input validation shema for user registration
export const registrationSchema = z.object({
   email: z.string().email({ message: "Invalid emaill address" }),
   password: z.string().min(8, { message: "Password must be 8 length long"})
});

// 
hashPassword.post("/addUser", zValidator("json", registrationSchema), async (c) => {
   const { email, password } = await c.req.json();

   const hashedPassword = await bcrypt.hash("uniquePass", 10);

   const comparePassword = await bcrypt.compare(password, hashedPassword)

   return !comparePassword ? c.json({ message: "Password doest not match" }) : c.json({ message: "Password Match" });
});

