import CartElement from "../components/Cart/CartElement"
import { useCart } from "../stores/store"


export const Cart = () => {
  const items = useCart((state) => state.items)
  return (
    <main className="pt-22 h-screen px-12">
      <h1 className="text-center">My Cart</h1>
      <div className="flex justify-around mt-8">
        <div className="flex-2 overflow-y-scroll h-[80vh]">
          <h2>Cart Info</h2>
          <table>
            <thead className="border-b">
              <tr>
                <th className="w-[30%]">
                  Products
                </th>
                <th className="w-[20%]">
                  Price
                </th>
                <th className="w-[20%]">
                  Quantity
                </th>
                <th className="w-[20%]">
                  Total
                </th>
                <th className="w-[10%]">

                </th>
              </tr>
            </thead>
            <tbody>
                {items.map(item => (
                <CartElement {...item} key={item.product.id}/>
                ))}
            </tbody>
          </table>
        </div>
        <div className="w-px h-[50vh] bg-basic mt-10 mx-12"></div>
        <div className="flex-1 pl-14">
          <h2 className="text-center">Your Order</h2>
        </div>
      </div>
    </main>
  )
}
// why the headings of the table scroll with content
// why when no items in cart, the heading collapse