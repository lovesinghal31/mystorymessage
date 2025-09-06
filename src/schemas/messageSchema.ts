import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(10, { message: "Content must be of 6 characters" })
    .max(300, { message: "Content must not be more then 300 characters" }),
});
