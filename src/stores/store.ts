import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { Product } from "../Sections/Home/FeatureProducts";

type cartItem = {
  product: Product;
  quantity: number;
};
export const useCart = create<{
  items: cartItem[];
  totalPrice: number;
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  inc: (productId: number) => void;
  dec: (productId: number) => void;
  clear: () => void;
}>()(
  immer((set) => ({
    items: [],
    totalPrice: 0,
    addItem: (product) =>
      set((state) => {
        const item = state.items.find((i) => i.product.id === product.id);
        if (item) {
          item.quantity++;
        } else {
          state.items.push({ product, quantity: 1 });
        }
      }),
    removeItem: (productId) =>
      set((state) => {
        const index = state.items.findIndex((i) => i.product.id === productId);
        if (index !== -1) state.items.splice(index, 1);
      }),
    inc: (productId) =>
      set((state) => {
        const item = state.items.find((item) => item.product.id === productId);
        if (item) item.quantity++;
      }),
    dec: (productId) =>
      set((state) => {
        const item = state.items.find((i) => i.product.id === productId);

        if (item)
          if (item.quantity > 1) item.quantity--;
          else {
            const index = state.items.findIndex(
              (i) => i.product.id === productId,
            );
            state.items.splice(index, 1);
          }
      }),
    clear: () =>
      set((state) => {
        state.items = [];
      }),
    
  })),
);
