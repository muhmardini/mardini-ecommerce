import z from "zod";

export const footerSchema = z.object({
    email: z.email(),
    message: z.string()
})

export type FooterFormFields = z.infer<typeof footerSchema>