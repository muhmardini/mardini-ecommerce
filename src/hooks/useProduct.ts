import { useQuery } from "@tanstack/react-query"
import Axios from "axios"


export const useProduct = () => {
    return useQuery({
        queryKey: ["id"],
        queryFn: async () => {
            const res = await Axios.get("https://dummyjson.com/products")
            return res.data.products
        }
    })
}
