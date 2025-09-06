import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(3, "Username must be of atleast 3 characters")
  .max(20, "Username must be not more then 20 characters")
  .regex(
    /^[a-zA-Z0-9]+$/,
    "Username must not contain any special character or symbol"
  );

export const passwordValidation = z
  .string()
  .min(6, { message: "Password must be atleast 6 chracters" });

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid Email Address" }), // 2nd way of writing validation schema
  password: passwordValidation,
});
