import CartElement from "../components/Cart/CartElement";
import { useCart } from "../stores/store";
import { useLocation } from "react-router-dom";
import PaymentForm from "../components/Checkout/PaymentForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

const Checkout = () => {
  const location = useLocation();
  const items = useCart((state) => state.items);
  return (
    <>
      <main className="py-22 px-4 md:px-12 flex md:flex-row flex-col justify-around mt-14 items-center">
        <div className="flex-4 pr-8 justify-center w-100">
          <div className="flex flex-col overflow-scroll md:overflow-y-scroll md:overflow-x-visible h-[60vh]">
            <table className="w-100 md:w-full">
              <thead className="border-b sticky top-0 bg-white">
                <tr>
                  <th className="w-4/6">Products</th>
                  <th className="w-1">Quantity</th>
                  <th className="w-2/6">Total</th>
                  <th className="w-1/6"></th>
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
          <div className="flex flex-col mt-4 items-center gap-1">
            <h3>Shipping Method</h3>
            <label className="flex items-center gap-2 text-sm ml-1">
              <input
                defaultChecked
                className="peer sr-only"
                type="radio"
                name="shipping"
              />
              <span className="checkbox-box w-3.25 h-3.25 border-[1.5px] border-subColor rounded-full flex items-center justify-center transition peer-checked:bg-primary peer-checked:border-subColor peer-checked:shadow-[inset_0_0_0_1.5px_white]"></span>
              DHL
            </label>
            <label className="flex items-center gap-2 text-sm ml-1">
              <input
                defaultChecked
                className="peer sr-only"
                type="radio"
                name="shipping"
              />
              <span className="checkbox-box w-3.25 h-3.25 border-[1.5px] border-subColor rounded-full flex items-center justify-center transition peer-checked:bg-primary peer-checked:border-subColor peer-checked:shadow-[inset_0_0_0_1.5px_white]"></span>
              FedEx
            </label>
          </div>
        </div>
        <div className="md:w-px md:h-[70vh] w-[75%] my-20 h-px self-center bg-basic"></div>
        <PaymentForm />
      </main>
      <h3 className="text-center text-subColor">
        <FontAwesomeIcon icon={faCopyright} />
        2026 80Z Mardini All Rights reserved. This website is a portfolio
        project and does not process real transactions
      </h3>
    </>
  );
};

export default Checkout;
