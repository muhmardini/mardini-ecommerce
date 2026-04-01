import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { footerSchema, type FooterFormFields } from "../schema/footer.schema";

export const useFooterForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        setError,
        formState: { errors, isSubmitting },
      } = useForm({
        defaultValues: {
          email: "example@example.ex",
          message: "Hello I'm Ben , I want to ask you about making my own products and added to your E-commerce , waiting for your response.",
        },
        resolver: zodResolver(footerSchema),
      });
      const onSubmit: SubmitHandler<FooterFormFields> = async (data) => {
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
        errors,
      }
}