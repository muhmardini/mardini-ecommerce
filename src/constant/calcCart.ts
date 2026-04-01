import type { Product } from "../components/Home/FeatureProducts";

export const calcCartTotal = async (product: Product) => ({
    tax: product.price * 0.1,
    vat: product.price * 0.2,
    serviceFee: product.price * 0.01,
    delivery: product.price * 0.05,

})