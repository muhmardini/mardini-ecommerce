import { useProduct } from "../../hooks/useProduct";
import { ProductCard } from "../Global/ProductCard";
import type { product } from "../../Sections/Home/FeatureProducts";

type secInfo = {
    headline: string,
    prod: product[]
}
const HomeProducts = () => {
  const { data = [], isLoading } = useProduct(); // using a custom hook inside it a useQuery to let me use the response across the project
  const newArrivalsProducts: product[] = data.slice(0, 12);
  const offersProducts: product[] = data.slice(13, 28);
  const bestSellProducts: product[] = data.slice(20, 150);
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
          <div className="flex overflow-x-scroll w-full gap-8 overflow-y-visible py-4">
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
