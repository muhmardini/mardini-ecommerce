import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import type { product } from "../../Sections/Home/FeatureProducts";
import { sizes } from "../../constant/colors-sizes";

import { useCartStore, type CartItem } from "../../stores/store";
type props = {
  prop: CartItem & { product: product };
};
const CartElement = ({ prop }: props) => {
  const { product, quantity } = prop;
  const cartMethods = useCartStore();
  const exist = quantity > 0;
  const handleQuantityChange = (e: number) => {
    cartMethods.setQuantity(product.id, e);
  };
  console.log(product);
  const total = Math.round(
    product?.price * quantity - product?.price * quantity * 0.1,
  );
  return (
    <>
      {exist && (
        <tr className="border-b">
          <td className="py-6">
            <div className="flex justify-center">
              <div>
                <img src={product?.images[0]} className="w-30" alt="" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm w-full">{product?.title}</p>
                <p className="text-sm">white</p>
                <div className="flex gap-12">
                  <p className="text-sm">size</p>
                  <p className="text-sm">{sizes[2]}</p>
                </div>
                <div className="flex gap-5">
                  <p className="text-sm">discount</p>
                  <p className="text-sm">10%</p>
                </div>
              </div>
            </div>
          </td>
          <td>
            <div className="flex justify-center">${product?.price}</div>
          </td>
          <td className="">
            <div className="flex justify-center items-center gap-6">
              {/* <p>{cartitem?.quantity}</p> */}
              <label>
                <input
                  type="number"
                  className="w-14 pl-4"
                  onChange={(e) => handleQuantityChange(+e.target.value)}
                  value={quantity}
                  name="cart-quantity"
                  id="cart-item-quantity"
                />{" "}
                Qty
              </label>
            </div>
          </td>
          <td>
            <div className="flex justify-center items-center">${total}</div>
          </td>
          <td>
            <button
              type="button"
              className="cursor-pointer"
              onClick={() => cartMethods.removeItem(product.id)}
            >
              <FontAwesomeIcon className="text-red-500" icon={faTrash} />
            </button>
          </td>
        </tr>
      )}
    </>
  );
};

export default CartElement;
