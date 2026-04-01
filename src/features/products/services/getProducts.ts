import Axios from "axios"



export const getProducts = async () => {
  const res = await Axios.get("https://dummyjson.com/products");
  return res.data.products;
};
