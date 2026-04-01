import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { contactSchema, type ContactFormFields } from "../schema/ContactForm.Schema";

export const useContactForm = () => {
    const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "example@example.ex",
      subject: "Complain, Compliment, Partner up, asking",
      message: "Good after noon, I have a little problem with the checkout.",
    },
    resolver: zodResolver(contactSchema),
  });
  const onSubmit: SubmitHandler<ContactFormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(data);
      reset();
    } catch {
      setError("email", {
        type: "manual",
        message: "invalid email",
      });
    }
  };
  return{
    register,
    handleSubmit:handleSubmit(onSubmit),
    isSubmitting,
    errors
  }
}