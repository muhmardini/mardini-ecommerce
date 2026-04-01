import { useProduct } from "../../features/products/hooks/useProduct";
import { ProductCard } from "@/features/products/components/ProductCard";
import type { Product } from "@/shared/types/products.type";

type secInfo = {
    headline: string,
    prod: Product[]
}
const HomeProducts = () => {
  const { data = [], isLoading } = useProduct(); // using a custom hook inside it a useQuery to let me use the response across the project
  const newArrivalsProducts: Product[] = data.slice(0, 12);
  const offersProducts: Product[] = data.slice(13, 28);
  const bestSellProducts: Product[] = data.slice(20, 150);
  console.log("New Arrivals",newArrivalsProducts,"------------");
  console.log("offers",offersProducts,"-----------");
  console.log("best sell",bestSellProducts,"--------------");
  console.log("whole Data",data,"----------");
  const headlines:secInfo[] = [
        {
            headline:"New Arrivals",
            prod:newArrivalsProducts,
        },
        {
            headline:"Offers",
            prod:offersProducts,
        },
        {
            headline:"Best Sellers",
            prod:bestSellProducts,
        }
  ]
  return (
    <div className="mx-5 max-w-full">
      {headlines.map((e) => (
        <>
          <h2 className="text-primary my-5">{e.headline}</h2>
          <div className="flex overflow-x-scroll w-full gap-4 overflow-y-visible py-4">
            {isLoading ? (
              <h2>Loading...</h2>
            ) : (
              e.prod.map((e) =>
                <ProductCard
                  key={e.id}
                  location={window.location.pathname}
                  data={e}
                />
              )
            )}
          </div>
        </>
      ))}
    </div>
  );
};

export default HomeProducts;
