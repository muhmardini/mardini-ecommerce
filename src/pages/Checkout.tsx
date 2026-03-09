import CartElement from "../components/Cart/CartElement";
import { useCart } from "../stores/store";
import { useLocation } from "react-router-dom";
import PaymentForm from "../components/Checkout/PaymentForm";

const Checkout = () => {
  const location = useLocation();
  const items = useCart((state) => state.items);
  return (
    <main className="pt-22 h-screen px-12 flex justify-around mt-14">
      <div className="flex-4 w-full pr-8 justify-center">
        <div className="flex flex-col overflow-y-scroll h-[60vh]">
          <table>
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
        <div className="flex flex-col mt-4 items-start gap-1">
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
      <div className="w-px h-[70vh] bg-basic"></div>
        <PaymentForm />
    </main>
  );
};

export default Checkout;
