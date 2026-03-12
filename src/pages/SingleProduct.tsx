import Colors from "../components/SingleProduct/Colors";
import Sizes from "../components/SingleProduct/Sizes";
import { useProduct } from "../hooks/useProduct";
import type { Product } from "../Sections/Home/FeatureProducts";
import { colors, sizes } from "../constant/colors-sizes";
const SingleProduct = () => {
  const { data = [] } = useProduct();
  const product: Product = data.slice(5, 10)[3];
  return (
      <main className="flex flex-col md:flex-row pt-24 min-h-screen justify-between items-start md:items-center ">
      <div className="flex flex-col flex-1 px-8">
        <div className="flex-3 flex justify-center border-b ">
          <img
            className="w-full max-w-120"
            src={product?.images[0]}
            alt={product?.title}
          />
        </div>
        <div className="flex flex-1">
          <div className="flex-2 flex justify-center ml-4">
            <img
              className="w-60 max-w-[180px]"
              src={product?.images[1]}
              alt={product?.title + "(2)"}
            />
          </div>
          <div className="flex-2 flex justify-center border-l mr-4">
            <img
              className="w-60 max-w-[180px]"
              src={product?.images[2]}
              alt={product?.title + "(3)"}
            />
          </div>
          <div className="flex-1 flex flex-col justify-center items-center border-l ">
            <img
              className="flex-1 w-[120px] border-b"
              src={product?.images[0]}
              alt={product?.title}
            />
            <img
              className="flex-1  w-[120px]"
              src={product?.images[1]}
              alt={product?.title}
            />
          </div>
        </div>
      </div>
      <div className="w-0.5 bg-gray-200 h-[80%] mx-10"></div>
      <div className="flex-1 self-start mt-12 flex flex-col gap-y-4">
        <h1 className="text-secondary">{product?.title}</h1>
        <p className="text-wrap text-[32px] mt-4">{product?.description}</p>
        <div>
          {product?.tags.map((e) => (
            <>
              <div className="px-4 py-1 bg-secondary inline-block rounded-full mr-2">
                <p className="text-background">{e}</p>
              </div>
            </>
          ))}
        </div>
        <div className="flex gap-2 items-start flex-col">
          <div className="flex gap-4 items-center ">
            <h2>Colors:</h2>
            <div className="flex gap-2">
              {colors.map((e: string) => (
                <Colors prop={e} />
              ))}
            </div>
          </div>
          <div className="flex gap-4 items-center ">
            <h2>Sizes:</h2>
            <div className="flex gap-4">
              {sizes.map((e: number) => (
                <Sizes prop={e} />
              ))}
            </div>
          </div>
        </div>
        <p className="text-4xl mt-4">$ {product.price }</p>
        <div className="flex items-center gap-6 justify-center">
          <button className="btn btn-primary px-12 py-2 text-xl shadow-lg" type="button">Buy Now</button>
          <button className="btn btn-secondary px-12 py-2 text-xl shadow-xl" type="button">Add to Cart</button>
        </div>
      </div>
    </main>
  );
};

export default SingleProduct;
