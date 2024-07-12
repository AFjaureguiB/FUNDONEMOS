import { z } from "zod"

export const signupSchema = z.object({
  username: z
    .string({
      required_error: "username is required",
      invalid_type_error: "Username must be a text",
    })
    .min(1)
    .max(255),
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a text",
    })
    .min(6, { message: "Password must have 6 characters" })
    .max(255),
  name: z
    .string({
      required_error: "name is required",
      invalid_type_error: "Name must be a text",
    })
    .min(1)
    .max(255),
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a text",
    })
    .email({ message: "Must be a valid Email" }),
})

export const signinSchema = z.object({
  username: z
    .string({
      required_error: "username is required",
      invalid_type_error: "Username must be a text",
    })
    .min(1)
    .max(255),
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a text",
    })
    .min(6, { message: "Password must have 6 characters" })
    .max(255),
})
