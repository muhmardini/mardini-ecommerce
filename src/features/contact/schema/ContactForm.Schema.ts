import z from "zod";


export const contactSchema = z.object({
  name: z.string().min(1, "Name can't be empty"),
  email: z.string().min(1, "email can't be empty").refine((val) => val !== "example@example.ex", "must not be the default value"),
  phone: z.string().trim().min(7).max(15).optional().or(z.literal("")),
  subject: z.string().optional(),
  message: z.string().optional(),
});

export type ContactFormFields = z.infer<typeof contactSchema>;