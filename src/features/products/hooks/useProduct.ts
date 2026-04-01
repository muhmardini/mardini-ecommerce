import { useQuery } from "@tanstack/react-query"
import { getProducts as getProducts } from "../services/getProducts"

export const useProduct = () => {
    return useQuery({
        queryKey: ["products"],
        queryFn: getProducts,
    })
}
