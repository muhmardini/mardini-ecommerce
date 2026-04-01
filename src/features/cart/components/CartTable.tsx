import CartElement from "./CartElement";
import {useCart} from "../store/store"

const CartTable = () => {
    const items = useCart((state) => state.items)
  return (
    <div className="md:flex-2 overflow-scroll md:overflow-x-visible md:overflow-y-scroll h-100">
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
  );
};

export default CartTable;
