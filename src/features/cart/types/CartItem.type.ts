import type { Product } from "@/shared/types/products.type";

export type CartItem = {
  product: Product;
  quantity: number;
};