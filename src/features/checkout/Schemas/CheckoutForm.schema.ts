import z from "zod";

const cardLength = {
  visa: 16,
  mastercard: 16,
  amex: 15,
};
const cvvCardLength = {
  visa: 3,
  mastercard: 3,
  amex: 4,
};

export const formSchema = z
  .object({
    email: z.email(),
    cardNumber: z.string().regex(/^\d+$/, "Card number must contain digits"),
    paymentMethod: z.enum(["visa", "mastercard", "amex"]),
    expireYear: z.number().int().min(new Date().getFullYear()),
    expireMonth: z
      .number()
      .int()
      .min(1, "Month must be between 1 and 12")
      .max(12, "Month must be between 1 and 12"),
    cvv: z.string().regex(/^\d+$/, "CVV must contain digits"),
    cardHolderFName: z.string().min(1, "First Name is required"),
    cardHolderLName: z.string().min(1, "Last name is required"),
    BillingAddress: z.string().min(1, "Address is required"),
    city: z.string().min(1, "city is required"),
    postalCode: z.int().min(1, "Postal code is required"),
  })
  .superRefine((data, ctx) => {
    const expectedLength = cardLength[data.paymentMethod];
    const cvvExpectedLength = cvvCardLength[data.paymentMethod];
    if (data.cardNumber.length !== expectedLength) {
      ctx.addIssue({
        code: "custom",
        path: ["cardNumber"],
        message: `${data.paymentMethod} Card Number must be ${expectedLength} digits`,
      });
    }
    if (data.cvv.length !== cvvExpectedLength) {
      ctx.addIssue({
        code: "custom",
        path: ["cvv"],
        message: `${data.paymentMethod} Card Verification Value must be ${cvvExpectedLength} digits`,
      });
    }
  });

export type FormFields = z.infer<typeof formSchema>;