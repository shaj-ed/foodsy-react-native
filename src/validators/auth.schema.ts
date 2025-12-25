import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().nonempty("Username is required"),
  password: z.string().nonempty("Password is required"),
});

export type LoginForm = z.infer<typeof loginSchema>;

export const initLoginFormValues: LoginForm = {
  username: "",
  password: "",
};
