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

export const signUpSchema = z
  .object({
    username: z
      .string()
      .nonempty("Username is required")
      .min(2, "Must be two characters"),
    email: z.email("Provide an valid email"),
    password: z.string().min(6, "Must be six characters or more"),
    confirmPassword: z.string(),
    phoneNumber: z
      .string()
      .nonempty("Phone number is required")
      .refine((v) => v?.length === 11, {
        message: "Provide a valid BD phone number",
      }),
    address: z.string().optional(),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Password should match",
    path: ["confirmPassword"],
  });

export type SignupForm = z.infer<typeof signUpSchema>;

export const initSignupFormValues: SignupForm = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
  address: "",
};
