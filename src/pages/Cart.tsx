import { useState } from "react";
import CartElement from "../components/Cart/CartElement";
import { useCart } from "../stores/store";
import { Link } from "react-router-dom";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Cart = () => {
  const items = useCart((state) => state.items);
  const itemsCount = useCart((state) => state.itemsCount);
  const delivery = useCart((state) => state.delivery);
  const tip = useCart((state) => state.tip);
  const setTip = useCart((state) => state.setTip);
  const setDelivery = useCart((state) => state.setDelivery);
  const total = items.reduce(
    (total, item) => (total += item.quantity * item.product.price),
    0,
  );
  const tax = total * 0.01;
  const serviceFee = total * 0.04;
  const deliveryValue = total * 0.08;
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const finalTotal = total + tax + deliveryValue + serviceFee + tip;
  const cartEmpty = items.length < 1;
  console.log(cartEmpty, "cartEmpty");

  // const handleTipInputChange = (
  //   isCustom: boolean,
  //   tipValue?: number | React.ChangeEvent<HTMLInputElement>,
  // ) => {
  //   if (isCustom) {
  //     tipValue ?setTip(Number(tipValue?.target.value)):;
  //   } else {
  //     setTip(tipValue ?? 0);
  //   }
  // };
  return (
    <>
      <main className="py-22 px-12">
        <h1 className="text-center text-secondary">My Cart</h1>
        <div className="flex md:flex-row flex-col justify-around mt-8 gap-12">
            <div className="md:flex-2 overflow-scroll md:overflow-x-visible md:overflow-y-scroll h-[80vh]">
            <h2 className="text-secondary">Cart Info</h2>
              <table className="w-200 md:w-full">
                <thead className="border-b sticky top-0 bg-white">
                  <tr>
                    <th className="w-1/2">Products</th>
                    <th className="W-1/4">Price</th>
                    <th className="w-1/4">Quantity</th>
                    <th className="w-[20%]">Total</th>
                    <th className="w-[10%]"></th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <CartElement
                      location={location.pathname}
                      {...item}
                      key={item.product.id}
                    />
                  ))}
                </tbody>
              </table>
          </div>
          <div className="md:w-px md:h-[50vh] w-[50vh] h-px bg-basic mt-10 mx-12 self-center"></div>
          <div className="flex-1 md:px-14 px-4 flex flex-col shadow-2xl rounded-lg py-4 border border-subColor">
            <h2 className="text-center text-secondary">Your Order</h2>
            <div className="flex justify-between py-2 mt-4 border-b">
              <p>SubTotal ({itemsCount} )</p>
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
                      onChange={() => setDelivery(true)}
                    />
                    <span className="checkbox-box w-3.25 h-3.25 border-[1.5px] border-subColor rounded-full flex items-center justify-center transition peer-checked:bg-primary peer-checked:border-subColor peer-checked:shadow-[inset_0_0_0_1.5px_white]"></span>
                    Delivery {delivery ? `$${deliveryValue.toFixed(2)}` : 0}
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      className="peer sr-only"
                      type="radio"
                      name="delivery"
                      onChange={() => setDelivery(false)}
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
                      onChange={() => setTip(0)}
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
                        setTip(5);
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
                        setTip(10);
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
                          setTip(Number(e.target.value));
                        }
                      }}
                      className="w-12 h-5 border border-subColor rounded-md pl-1"
                      type="number"
                    />
                  </label>
                  <p>Total Tip: ${tip}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between py-4 border-b">
              <h3>Service Fee</h3>
              <h3>${serviceFee.toFixed(2)}</h3>
            </div>
            <div className="flex justify-between py-4 border-b">
              <h3>Tax</h3>
              <h3>${tax.toFixed(2)}</h3>
            </div>
            <div className="flex justify-between py-4">
              <h3>Total Payable</h3>
              <h3>${finalTotal.toFixed(2)}</h3>
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
          </div>
        </div>
      </main>
      <h3 className="text-center text-subColor">
        <FontAwesomeIcon icon={faCopyright} />
        2026 80Z Mardini All Rights reserved. This website is a portfolio
        project and does not process real transactions
      </h3>
    </>
  );
};
// why the headings of the table scroll with content
// why when no items in cart, the heading collapse
