import {
  faCheck,
  faCreditCard,
  faEnvelope,
  faMap,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { usePaymentForm } from "./hooks/usePaymentForm";
import { useCart } from "../cart";

// add the products to the localstorage so when refresh it won't be gone

const PaymentForm = () => {
  const { register } = usePaymentForm();
  const cart = useCart();
  const payment = usePaymentForm();
  const total = cart.items.reduce(
    (result, item) => (result += item.product.price * item.quantity),
    0,
  );
  const tax = +(total * 0.01).toFixed(2);
  const serviceFee = +(total * 0.04).toFixed(2);
  const deliveryValue = +(total * 0.08).toFixed(2);
  const subTotal = +(
    total +
    tax +
    deliveryValue +
    serviceFee +
    cart.tip
  ).toFixed(2);
  const vat = +(subTotal * 0.2).toFixed(2);
  const orderTotal = +(subTotal + vat).toFixed(2);
  return (
    <form
      className="md:w-[40%] w-full flex flex-col justify-start items-start px-4 md:px-20"
      onSubmit={payment.handleSubmit}
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
        {payment.errors.email && <p className="text-red-500">{payment.errors.email.message}</p>}
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
              onFocus={payment.handleShowCardNum}
              onBlur={payment.handleHideCardNum}
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
        {payment.errors.cardNumber && (
          <p className="text-red-500">{payment.errors.cardNumber.message}</p>
        )}
        {payment.errors.expireYear && (
          <p className="text-red-500">{payment.errors.expireYear.message}</p>
        )}
        {payment.errors.expireMonth && (
          <p className="text-red-500">{payment.errors.expireMonth.message}</p>
        )}
        {payment.errors.cvv && <p className="text-red-500">{payment.errors.cvv.message}</p>}
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
        {payment.errors.cardHolderFName && (
          <p className="text-red-500">{payment.errors.cardHolderFName.message}</p>
        )}
        {payment.errors.cardHolderLName && (
          <p className="text-red-500">{payment.errors.cardHolderLName.message}</p>
        )}
      </label>
      <label className="flex flex-col gap-2 w-full pb-6">
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
        {payment.errors.city && <p className="text-red-500">{payment.errors.city.message}</p>}
        {payment.errors.postalCode && (
          <p className="text-red-500">{payment.errors.postalCode.message}</p>
        )}
      </label>
      <div className="flex flex-col w-full gap-2">
        <div className="flex justify-between">
          <h3 className="text-secondary">
            SubTotal ({cart.itemsCount} {cart.itemsCount === 1 ? "Product" : "Products"})
          </h3>
          <h3 className="text-secondary">$ {subTotal.toFixed(2)}</h3>
        </div>
        <div className="flex justify-between">
          <h3 className="text-secondary">Vat (20%)</h3>
          <h3 className="text-secondary">$ {vat.toFixed(2)}</h3>
        </div>
        <div className="flex justify-between">
          <h3 className="text-secondary">Order Total</h3>
          <h3 className="text-secondary">$ {orderTotal.toFixed(2)}</h3>
        </div>
        <button
          disabled={payment.isSubmitting}
          className="btn btn-secondary mx-auto w-1/2"
        >
          {payment.isSubmitting ? "Processing" : `Pay $ ${orderTotal.toFixed(2)}`}
        </button>
        {payment.submitSuccess && (
          <div className="bg-basic/70 fixed top-0 right-0 w-screen h-screen z-40">
            <div className="absolute top-1/2 right-1/2 md:w-1/2 w-4/5 h-3/5 translate-x-1/2 -translate-y-1/2 bg-white outline-4 outline-secondary rounded-3xl border-basic border">
              <div className="flex flex-col py-6 px-5 gap-8 items-center text-secondary">
                <h2 className="text-green-500 pb-4 mb-4 text-center border-b border-secondary">
                  <FontAwesomeIcon icon={faCheck} />
                  Order Placed Successfully!
                </h2>
                <h2 className="text-primary">
                  Thank you for your purchase form Mardini!
                </h2>
                <div>
                  <h3>your order Total: ${orderTotal.toFixed(2)}</h3>
                  <h3>
                    Expected delivery to Time:{" "}
                    <span className="text-green-500">7-9 days </span>{" "}
                    approximate depending on the shipping entity
                  </h3>
                  <h3>Order Number: #483920</h3>
                  <h3>Order Date: {payment.formattedDate}</h3>
                </div>
                <div className="flex gap-8">
                  <button
                    className="btn btn-secondary text-xs md:text-md"
                    onClick={() => {
                      payment.setSubmitSuccess(false);
                      cart.clear();
                    }}
                  >
                    Track Order
                  </button>
                  <button
                    onClick={() => {
                      payment.setSubmitSuccess(false);
                      cart.clear();
                    }}
                    className="btn btn-primary text-xs md:text-md md:px-9 px-3"
                  >
                    <Link to="/Products">Continue Shopping</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </form>
  );
};

export default PaymentForm;
