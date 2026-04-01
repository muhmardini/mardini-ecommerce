import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../store/store";

const CartForm = () => {
  const cart = useCart();
  // const delivery = useCart((state) => state.delivery);
  // const tip = useCart((state) => state.tip);
  // const setTip = useCart((state) => state.setTip);
  const total = cart.items.reduce(
    (total, item) => (total += item.quantity * item.product.price),
    0,
  );
  const tax = (total * 0.01).toFixed(2);
  const serviceFee = (total * 0.04).toFixed(2);
  const deliveryValue = (total * 0.08).toFixed(2);
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const finalTotal = total + tax + deliveryValue +serviceFee + cart.tip;
  const cartEmpty = cart.items.length < 1;
  return (
    <form className="flex-1 md:px-14 px-4 flex flex-col shadow-2xl rounded-lg py-4 border border-subColor">
      <h2 className="text-center text-secondary">Your Order</h2>
      <div className="flex justify-between py-2 mt-4 border-b">
        <p>SubTotal ({cart.itemsCount} )</p>
        <p>${total.toFixed(2)}</p>
      </div>
      <div className="flex flex-col gap-4 py-8 border-b">
        <h3>Delivery</h3>
        <div className="flex gap-4 justify-between">
          <div className="ml-2 flex flex-col gap-1">
            <label className="flex items-center gap-2 text-sm">
              <input
                defaultChecked
                className="peer sr-only"
                type="radio"
                name="delivery"
                onChange={() => cart.setDelivery(true)}
              />
              <span className="checkbox-box w-3.25 h-3.25 border-[1.5px] border-subColor rounded-full flex items-center justify-center transition peer-checked:bg-primary peer-checked:border-subColor peer-checked:shadow-[inset_0_0_0_1.5px_white]"></span>
              Delivery {cart.delivery ? `$${deliveryValue}` : 0}
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                className="peer sr-only"
                type="radio"
                name="delivery"
                onChange={() => cart.setDelivery(false)}
              />
              <span className="checkbox-box w-3.25 h-3.25 border-[1.5px] border-subColor rounded-full flex items-center justify-center transition peer-checked:bg-primary peer-checked:border-subColor peer-checked:shadow-[inset_0_0_0_1.5px_white] text-sm"></span>
              Pick up
            </label>
          </div>
          <div>
            <select
              className="bg-background w-22 h-8 text-sm px-1 rounded-md shadow-md border border-subColor"
              name="delivery-grab"
              id="delivery-grab"
              title="delivery-grab"
            >
              <option value="ASAP">ASAP</option>
              <option value="Schedule">Schedule</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center py-4 border-b gap-4 md:gap-12">
        <h3 className="flex-1">Tips</h3>
        <div className="flex-4 flex flex-col gap-4 mt-1">
          <div className="flex gap-8">
            <label className="flex items-center gap-2 text-sm">
              <input
                className="peer sr-only"
                onChange={() => cart.setTip(0)}
                type="radio"
                name="tip"
              />
              <span className="checkbox-box w-3.25 h-3.25 border-[1.5px] border-subColor rounded-full flex items-center justify-center transition peer-checked:bg-primary peer-checked:border-subColor peer-checked:shadow-[inset_0_0_0_1.5px_white] text-sm"></span>
              no
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                defaultChecked
                className="peer sr-only"
                type="radio"
                name="tip"
                onChange={() => {
                  setIsCustom(false);
                  cart.setTip(5);
                }}
              />
              <span className="checkbox-box w-3.25 h-3.25 border-[1.5px] border-subColor rounded-full flex items-center justify-center transition peer-checked:bg-primary peer-checked:border-subColor peer-checked:shadow-[inset_0_0_0_1.5px_white] text-sm"></span>
              $5
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                className="peer sr-only"
                onChange={() => {
                  setIsCustom(false);
                  cart.setTip(10);
                }}
                type="radio"
                name="tip"
              />
              <span className="checkbox-box w-3.25 h-3.25 border-[1.5px] border-subColor rounded-full flex items-center justify-center transition peer-checked:bg-primary peer-checked:border-subColor peer-checked:shadow-[inset_0_0_0_1.5px_white] text-sm"></span>
              $10
            </label>
          </div>
          <div className="flex gap-10">
            <label className="flex items-center gap-2 text-sm">
              <input
                id="custom-tip"
                className="peer sr-only"
                onChange={() => setIsCustom(true)}
                type="radio"
                name="tip"
              />
              <span className="checkbox-box w-3.25 h-3.25 border-[1.5px] border-subColor rounded-full flex items-center justify-center transition peer-checked:bg-primary peer-checked:border-subColor peer-checked:shadow-[inset_0_0_0_1.5px_white] text-sm"></span>
              $
              <input
                onChange={(e) => {
                  if (isCustom) {
                    cart.setTip(Number(e.target.value));
                  }
                }}
                className="w-12 h-5 border border-subColor rounded-md pl-1"
                type="number"
              />
            </label>
            <p>Total Tip: ${cart.tip}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between py-4 border-b">
        <h3>Service Fee</h3>
        <h3>${serviceFee}</h3>
      </div>
      <div className="flex justify-between py-4 border-b">
        <h3>Tax</h3>
        <h3>${tax}</h3>
      </div>
      <div className="flex justify-between py-4">
        <h3>Total Payable</h3>
        <h3>${finalTotal}</h3>
      </div>
      <Link
        onClick={(e) => {
          if (cartEmpty) e.preventDefault();
        }}
        className={
          cartEmpty
            ? "w-full btn btn-subColor hover:bg-subColor cursor-not-allowed opacity-50"
            : "w-full btn btn-secondary mt-4"
        }
        to={"/checkout"}
      >
        {cartEmpty ? "Cart is empty" : "Proceed to Payments"}
      </Link>
    </form>
  );
};

export default CartForm;
