import { formSchema } from "../Schemas/CheckoutForm.schema";
import type { FormFields } from "../Schemas/CheckoutForm.schema";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

export const usePaymentForm = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const nowDate = new Date();
  const formattedDate =
    `${nowDate.getFullYear()}-${String(nowDate.getMonth() + 1).padStart(2, "0")}-${String(nowDate.getDate()).padStart(2, "0")} ` +
    `${String(nowDate.getHours()).padStart(2, "0")}:${String(nowDate.getMinutes()).padStart(2, "0")}`;
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(formSchema),
  });
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setSubmitSuccess(true);

      console.log(data);
      if (submitSuccess === false) {
        reset();
      }
    } catch {
      setSubmitSuccess(false);
      setError("cardNumber", {
        type: "manual",
        message: "invalid card Number",
      });
    }
    // add a pop up window for showing that the order has been submitted and clear the cart when everything works
  };
  const handleShowCardNum = (e: React.FocusEvent<HTMLInputElement>) => {
    const cardNumInput = e.currentTarget;
    cardNumInput.type = "text";
  };
  const handleHideCardNum = (e: React.FocusEvent<HTMLInputElement>) => {
    const cardNumInput = e.currentTarget;
    cardNumInput.type = "password";
  };
  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    reset,
    setError,
    isSubmitting,
    errors,
    handleShowCardNum,
    handleHideCardNum,
    formattedDate,
    submitSuccess,
    setSubmitSuccess,
  };
};
