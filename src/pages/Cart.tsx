import { useCart } from "@/features/cart/store/store";
import { Link } from "react-router-dom";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartForm from "@/features/cart/components/CartForm";
import CartTable from "@/features/cart/components/CartTable";

export const Cart = () => {
  const items = useCart((state) => state.items);
  return (
    <>
      <main className="py-22 px-12">
        <h1 className="text-center text-secondary mb-10">My Cart</h1>
        {items.length >= 1 ? (
          <div className="">
            <h2 className="text-secondary">Cart Info</h2>
            <div className="flex md:flex-row flex-col justify-around mt-8 gap-12">
              <CartTable />
              <div className="md:w-px md:h-[50vh] w-3/4 h-px bg-basic mt-10 mx-12 self-center"></div>
              <CartForm />
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <h1 className="text-secondary text-center">
              There is no Items in the cart yet, go to{" "}
              <Link
                className="cursor-pointer text-primary hover:underline hover:underline-offset-4"
                to="/products"
              >
                Products
              </Link>{" "}
              page and add some
            </h1>
            <img
              className="w-3/4 md:w-1/2"
              src="/images/cart-empty.png"
              alt=""
            />
          </div>
        )}
      </main>
      <h3 className="text-center text-subColor">
        <FontAwesomeIcon icon={faCopyright} />
        2026 80Z Mardini All Rights reserved. This website is a portfolio
        project and does not process real transactions
      </h3>
    </>
  );
};
