import {
  faCreditCard,
  faEnvelope,
  faMap,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCart } from "../../stores/store";

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

const formSchema = z
  .object({
    email: z.email(),
    cardNumber: z.string().regex(/^\d+$/, "Card number must contain digits"),
    paymentMethod: z.enum(["visa", "mastercard", "amex"]),
    expireYear: z
      .number()
      .int()
      .min(
        new Date().getFullYear()
      ),
    expireMonth: z
      .number()
      .int()
      .min(1, "Month must be between 1 and 12")
      .max(12, "Month must be between 1 and 12"),
    cvv: z.string().regex(/^\d+$/, "CVV must contain digits"),
    cardHolderFName: z.string().min(1,"First Name is required"),
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

type FormFields = z.infer<typeof formSchema>;
// add the products to the localstorage so when refresh it won't be gone

const PaymentForm = () => {
  const items = useCart((state) => state.items)
  const tip = useCart((state) => state.tip)
  const itemsCount = useCart((state) => state.itemsCount)
  const clear = useCart((state) => state.clear)
  const total = items.reduce((result, item) => (
    result += item.product.price * item.quantity
  ),0)
  const tax = total * 0.01;
    const serviceFee = total * 0.04;
    const deliveryValue = total * 0.08;
    const subTotal = total + tax + deliveryValue + serviceFee + tip;
    const vat = subTotal * 0.2
    const orderTotal = subTotal + vat
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
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(data);
      reset();
      clear();
    } catch {
      setError("cardNumber", {
        type: "manual",
        message: "invalid card Number",
      });
    }
    // add a pop up window for showing that the order has been submitted and clear the cart when everything works
  };
  const handleShowCardNum = (e:React.FocusEvent<HTMLInputElement>) => {
    const cardNumInput = e.currentTarget;
    cardNumInput.type = 'text'
  }
  const handleHideCardNum = (e:React.FocusEvent<HTMLInputElement>) => {
    const cardNumInput = e.currentTarget;
    cardNumInput.type = 'password'
  }
  return (
    <form
      className="w-[40%] flex flex-col justify-start items-start px-20"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-center self-center">Payment Details</h1>
      <label
        className="flex flex-col w-full gap-2 py-6"
        htmlFor="payment-email"
      >
        Email Address
        <div className="relative w-full">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="absolute left-3 top-4 -translate-y-1/2 text-xl text-subColor"
          />
          <input
            {...register("email")}
            id="payment-email"
            type="email"
            className="border border-subColor rounded-2xl bg-subBackground px-2 pl-10 w-full h-8 text-md text-secondary"
            placeholder="Your Email"
          />
        </div>
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </label>
      <label className="flex flex-col gap-2 w-full pb-6" htmlFor="card-details">
        Card Details
        <div className="full">
          <div className="relative flex w-full">
            <FontAwesomeIcon
              icon={faCreditCard}
              className="absolute left-3 top-4 -translate-y-1/2 text-xl text-subColor"
            />
            <input
              id="cardNum"
              {...register("cardNumber")}
              onFocus={handleShowCardNum}
              onBlur={handleHideCardNum}
              type="text"
              className="border border-subColor rounded-2xl bg-subBackground px-2 pl-10 w-full h-8 text-md rounded-b-none rounded-tr-none text-secondary"
              placeholder="Card Number"
            />
            <select
              {...register("paymentMethod")}
              className="bg-subBackground border border-subColor h-8 rounded-tr-2xl text-center text-subColor w-[40%]"
              id="card-type"
              name="card-type"
            >
              <option defaultChecked value="visa">
                Visa
              </option>
              <option value="mastercard">Master card</option>
              <option value="amex">Amex</option>
            </select>
          </div>
          <div className="flex w-full">
            <input
              {...register("expireYear", { valueAsNumber: true })}
              type="number"
              className="border border-subColor rounded-bl-2xl bg-subBackground px-2 w-full h-8 text-md text-secondary text-center"
              placeholder="Expiration YYYY"
            />
            <input
              {...register("expireMonth", { valueAsNumber: true })}
              type="number"
              className="border border-subColor bg-subBackground px-2 w-full h-8 text-md text-secondary text-center"
              placeholder="Expiration MM"
            />
            <input
              {...register("cvv")}
              type="password"
              className="border border-subColor rounded-br-2xl bg-subBackground px-2 text-center w-[55%] h-8 text-md text-secondary"
              placeholder="CVC/CVV"
            />
          </div>
        </div>
        {errors.cardNumber && (
          <p className="text-red-500">{errors.cardNumber.message}</p>
        )}
        {errors.expireYear && (
          <p className="text-red-500">{errors.expireYear.message}</p>
        )}
        {errors.expireMonth && (
          <p className="text-red-500">{errors.expireMonth.message}</p>
        )}
        {errors.cvv && <p className="text-red-500">{errors.cvv.message}</p>}
      </label>
      <label className="flex flex-col gap-2 w-full pb-6">
        Card Holder
        <div className="relative">
          <FontAwesomeIcon
            icon={faUser}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-subColor"
          />
          <div className="flex">
            <input
              {...register("cardHolderFName")}
              type="text"
              className="border border-subColor rounded-l-2xl bg-subBackground px-2 pl-10 w-1/2 h-8 text-md text-secondary"
              placeholder="Your first name"
            />
            <input
              {...register("cardHolderLName")}
              type="text"
              className="border border-subColor rounded-r-2xl bg-subBackground px-2 pl-10 w-1/2 h-8 text-md text-secondary"
              placeholder="Your last name"
            />
          </div>
        </div>
        {errors.cardHolderFName && (
          <p className="text-red-500">{errors.cardHolderFName.message}</p>
        )}
        {errors.cardHolderLName && (
          <p className="text-red-500">{errors.cardHolderLName.message}</p>
        )}
      </label>
      <label
        className="flex flex-col gap-2 w-full pb-6"
      >
        Billing Address
        <div className="w-full">
          <div className="relative flex flex-wrap w-full">
            <FontAwesomeIcon
              icon={faMap}
              className="absolute left-3 top-4 -translate-y-1/2 text-xl text-subColor"
            />
            <input
              {...register("BillingAddress")}
              type="text"
              className="border border-subColor rounded-t-2xl bg-subBackground px-2 pl-10 w-full h-8 text-md text-secondary"
              placeholder="Full Address"
            />
          </div>
          <div className="flex w-full">
            <input
              {...register("city")}
              type="text"
              className="border border-subColor rounded-bl-2xl bg-subBackground px-2 text-center w-full h-8 text-md text-secondary"
              placeholder="City"
            />
            <input
              {...register("postalCode", { valueAsNumber: true })}
              type="number"
              className="border border-subColor rounded-br-2xl bg-subBackground px-2 text-center w-full h-8 text-md text-secondary"
              placeholder="Postal Code"
            />
          </div>
        </div>
        {errors.city && <p className="text-red-500">{errors.city.message}</p>}
        {errors.postalCode && (
          <p className="text-red-500">{errors.postalCode.message}</p>
        )}
      </label>
      <div className="flex flex-col w-full gap-2">
        <div className="flex justify-between">
          <h3 className="text-secondary">SubTotal ({itemsCount} {itemsCount ===1?"Product":"Products"})</h3>
          <h3 className="text-secondary">$ {subTotal.toFixed(2)}</h3>
        </div>
        <div className="flex justify-between">
          <h3 className="text-secondary">Vat (20%)</h3>
          <h3 className="text-secondary">$ {(vat).toFixed(2)}</h3>
        </div>
        <div className="flex justify-between">
          <h3 className="text-secondary">Order Total</h3>
          <h3 className="text-secondary">$ {orderTotal.toFixed(2)}</h3>
        </div>
      <button disabled={isSubmitting} className="btn btn-secondary mx-auto w-1/2">
        {isSubmitting ? "Processing" : `Pay $ ${orderTotal.toFixed(2)}`}
      </button>
      </div>
    </form>
  );
};
// add a pop up when submitting is successful


export default PaymentForm;