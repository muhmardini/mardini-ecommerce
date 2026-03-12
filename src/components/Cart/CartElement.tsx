import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { sizes } from "../../constant/colors-sizes";
import { useCart, type CartItem, } from "../../stores/store";

type CartEleProps = {
  location: string;
} & CartItem;

const CartElement = ({ product, quantity, location }: CartEleProps) => {
  const increaseQty = useCart((state) => state.inc);
  const decreaseQty = useCart((state) => state.dec);
  const removeProduct = useCart((state) => state.removeItem);
  const ProductTotalPrice = product.price * quantity;
  if (location.toLowerCase() === "/cart") {
    return (
      <>
        <tr className="border-b">
          <td className="py-6">
            <div className="flex justify-center">
              <div>
                <img src={product?.images[0]} className="w-30 h-auto" alt="" />
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
              <button
                className="cursor-pointer"
                onClick={() => increaseQty(product?.id)}
                type="button"
                title="increase quantity"
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
              <p className="text-lg">{quantity}</p>
              <button
                className="cursor-pointer"
                onClick={() => decreaseQty(product?.id)}
                type="button"
                title="decrease quantity"
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
            </div>
          </td>
          <td>
            <div className="flex justify-center items-center">
              $ {ProductTotalPrice.toFixed(2)}
            </div>
          </td>
          <td>
            <button
              type="button"
              className="cursor-pointer"
              title="deleteItem"
              onClick={() => removeProduct(product.id)}
            >
              <FontAwesomeIcon className="text-red-500" icon={faTrash} />
            </button>
          </td>
        </tr>
      </>
    );
  } else if (location.toLowerCase() === "/checkout") {
    return (
      <>
        <tr className="border-b">
          <td className="py-6">
            <div className="flex justify-center items-center">
              <div>
                <img src={product?.images[0]} className="w-30 h-auto" alt="" />
              </div>
                <p className="text-sm w-[40%]">{product?.title} - white</p>
            </div>
          </td>
          <td className="">
            <div className="flex justify-center items-center gap-6">
              <p className="text-lg">{quantity}</p>
            </div>
          </td>
          <td>
            <div className="flex justify-center items-center">
              $ {ProductTotalPrice.toFixed(2)}
            </div>
          </td>
          <td>
            <button
              type="button"
              className="cursor-pointer"
              title="deleteItem"
              onClick={() => removeProduct(product.id)}
            >
              <FontAwesomeIcon className="text-red-500" icon={faTrash} />
            </button>
          </td>
        </tr>
      </>
    );
  }
};

export default CartElement;
