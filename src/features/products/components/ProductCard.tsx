import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Product } from "@/shared/types/products.type";
import {motion} from 'motion/react'
import { useCart } from "@/features/cart/store/store";
type productsData = { 
  data: Product;
  location: string;
};
const container = {
  hidden: { opacity: 0 , y:20 },
  visible: {opacity: 1,y: 0 ,transition: { staggerChildren: 0.2} },
}
const container2 = {
  hidden: { opacity: 0 , x:20 },
  visible: {opacity: 1,x: 0 ,transition: { staggerChildren: 0.2} ,},
}
const item = {
  hidden: {opacity: 0},
  visible: {opacity: 1},
}
const item2 = {
  hidden: {opacity: 0},
  visible: {opacity: 1},
}
export const ProductCard = ({ data, location }: productsData) => {
  const addItem = useCart((state) => state.addItem)
  console.log("data from prod card", data, "--------------");
  if (!data) return null;
  else {
    if (location.toLowerCase() === "/") {
      return (
        <motion.div variants={container2} viewport={{once:true, amount: 0}} layout initial="hidden" whileInView="visible" className="min-w-60 border border-b-basic p-1 rounded-2xl flex flex-col ml-2 transform-scale cursor-pointer">
          <motion.div variants={item2}>
            <img
              src={
                data.images?.[0] ||
                data.images?.[1] ||
                data.images?.[2] ||
                "/images/image-placeholder.jpg"
              }
              alt={data.category || data.title || "product Image"}
              className="w-full rounded-2xl"
            />
          </motion.div>
          <motion.div variants={item2} className="flex flex-col px-1 py-2 flex-1">
            <div className="mb-4 flex flex-col min-w-0">
              <h3 className="text-secondary min-h-12">
                {data.title}
              </h3>
              <p className="w-full line-clamp-2 min-w-0 overflow-hidden">
                {data.description}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col items-start gap-y-1">
                <div className="flex items-center gap-x-1">
                  <FontAwesomeIcon
                    icon={faStar}
                    size="xs"
                    className="text-amber-400"
                  />
                  <p className="text-subColor">{data?.reviews[0]?.rating ?? 0}/5</p>
                  <p className="p-subtext text-subColor">
                    {data?.reviews?.length ?? 0} Review
                  </p>
                </div>
                <div>
                  <p>${data.price}</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-y-1">
                <p className="">
                  {data.availabilityStatus} {data.stock}
                  {/*Make it random*/}
                </p>
                <button title="Add to Cart">
                  <FontAwesomeIcon
                    className="hover:text-primary transition-colors"
                    icon={faCartShopping}
                    onClick={() => addItem(data)}
                  />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      );
    } else if (location.toLowerCase() === "/products") {
      return (
        <motion.div variants={container} viewport={{once: true, amount: 0.2}} initial="hidden" whileInView="visible" exit="hidden" className="w-60 border border-b-basic p-1 rounded-2xl flex flex-col ml-2 transform-scale cursor-pointer">
          <motion.div variants={item}>
            <img
              src={
                data.images?.[0] ||
                data.images?.[1] ||
                data.images?.[2] ||
                "/images/image-placeholder.jpg"
              }
              alt={data.category}
              className="w-full rounded-2xl"
            />
          </motion.div>
          <motion.div variants={item} className="flex flex-col px-1 py-2 flex-1">
            <div className="mb-4 flex flex-col min-w-0">
              <h3 className="text-secondary min-h-12">
                {data?.title || "Lorem ipsum dolor"}
              </h3>
              <p className="w-full line-clamp-2 min-w-0 overflow-hidden">
                {data?.description}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col items-start gap-y-1">
                <div className="flex items-center gap-x-1">
                  <FontAwesomeIcon
                    icon={faStar}
                    size="xs"
                    className="text-amber-400"
                  />
                  <p className="text-subColor">{data?.reviews[0]?.rating ?? 0}/5</p>
                  <p className="p-subtext text-subColor">
                    {data?.reviews?.length ?? 0} Review
                  </p>
                </div>
                <div>
                  <p>${data.price || 200}</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-y-1">
                <p className="">{data.availabilityStatus} {data.stock}</p>
                <button className="cursor-pointer" title="add-to-cart">
                  <FontAwesomeIcon
                    className="hover:text-primary transition-colors"
                    icon={faCartShopping}
                    onClick={() => addItem(data)}
                  />
                </button>
              </div>
            </div>
            <div className="mt-2 justify-self-end">
                {data.tags?.map((e) => (
                    <>
                      <div className="px-3 py-1 bg-secondary inline-block rounded-full mr-2">
                        <p className="text-background font-semibold p-subtext">{e}</p>  
                      </div>
                    </>
                ))}
            </div>
          </motion.div>
        </motion.div>
      );
    }else if(location.toLowerCase() === "/productsrecommended"){
      return (
        <motion.div variants={container2} viewport={{once: true, amount:0.6}} layout initial="hidden" whileInView="visible" className="w-80 border border-b-basic p-2 rounded-2xl flex flex-col ml-2 transform-scale cursor-pointer h-90">
          <motion.div variants={item2} className="h-[50%]">
            <img
              src={
                data.images?.[0] ||
                data.images?.[1] ||
                data.images?.[2] ||
                "/images/image-placeholder.jpg"
              }
              alt={data.category || data.title || "product Image"}
              className="h-[60%] w-full object-contain mt-5 rounded-2xl"
            />
          </motion.div>
          <motion.div variants={item2} className="flex flex-col px-1">
            <div className="mb-4 flex flex-col min-w-0">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-secondary">
                  {data.title || "Lorem ipsum dolor"}{" "}
                </h3>
                <div className="flex items-center gap-x-1">
                  <FontAwesomeIcon
                    icon={faStar}
                    size="xs"
                    className="text-amber-400"
                  />
                  <p className="text-subColor">{data?.reviews[0]?.rating ?? 0}/5</p>
                </div>
              </div>
              <p className="w-full line-clamp-2 min-w-0 overflow-hidden">
                {data.description}
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col items-start gap-y-1 self-start">
                <p>${data.price}</p>
              </div>
              <div className="flex justify-around mt-4 w-full">
                <button className="btn-primary btn" onClick={() => addItem(data)} type="button">
                  Add to Cart
                </button>
                <button className="btn btn-background" type="button">
                  Buy Now
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )
    }else{
      return <h1>not the right path</h1>
    }
  } 
};
