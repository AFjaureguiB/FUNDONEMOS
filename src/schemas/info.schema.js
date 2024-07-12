import { z } from "zod"

export const createInfoSchema = z.object({
  title: z
    .string({
      required_error: "Title is required",
      invalid_type_erorr: "It must be a text",
    })
    .min(1)
    .max(255),
  description: z
    .string({
      required_error: " Description is required",
      invalid_type_erorr: "It must be a text",
    })
    .min(1)
    .max(255)
    .optional(),
})

export const updateInfoSchema = z.object({
  title: z
    .string({
      required_error: "Title is required",
      invalid_type_erorr: "It must be a text",
    })
    .min(1)
    .max(255)
    .optional(),
  description: z
    .string({
      required_error: " Description is required",
      invalid_type_erorr: "It must be a text",
    })
    .min(1)
    .max(255)
    .optional(),
})
