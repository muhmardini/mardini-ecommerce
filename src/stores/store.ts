import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { Product } from "../Sections/Home/FeatureProducts";

export type CartItem = {
  product: Product;
  quantity: number;
};
export const useCart = create<{
  items: CartItem[];
  itemsCount: number;
  delivery: boolean;
  tip: number;
  setTip: (value: number) => void;
  setDelivery: (value:boolean) => void;
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  inc: (productId: number) => void;
  dec: (productId: number) => void;
  clear: () => void;
  getProduct: (productId: number) => Product | undefined
}>()(
  immer((set, get) => ({
    items: [],
    itemsCount: 0,
    delivery: true,
    tip: 5,
    setTip: (value) =>
      set((state) => {
        state.tip = value;
      }),
    setDelivery: (value) =>
      set((state) => {
        state.delivery = value;
      }),
    addItem: (product) =>
      set((state) => {
        const item = state.items.find((i) => i.product.id === product.id);
        if (item) {
          item.quantity++;
          state.itemsCount++;
        } else {
          state.items.push({ product, quantity: 1 });
          state.itemsCount++;
        }
      }),
    removeItem: (productId) =>
      set((state) => {
        const index = state.items.findIndex((i) => i.product.id === productId);
        const item = state.items[index]
        if (index !== -1) {
          state.items.splice(index, 1);
          state.itemsCount -= item.quantity
        }
      }),
    inc: (productId) =>
      set((state) => {
        const item = state.items.find((item) => item.product.id === productId);
        if (item) {
          item.quantity++;
          state.itemsCount++;
        }
      }),
    dec: (productId) =>
      set((state) => {
        const item = state.items.find((i) => i.product.id === productId);

        if (item)
          if (item.quantity > 1) {
            item.quantity--;
            state.itemsCount--;
          } else {
            const index = state.items.findIndex(
              (i) => i.product.id === productId,
            );
            state.items.splice(index, 1);
            state.itemsCount--;
          }
      }),
    clear: () =>
      set((state) => {
        state.items = [];
        state.itemsCount = 0;
      }),
    getProduct: (productId) => {
      const item = get().items.find(i => i.product.id === productId);
      return item?.product;
    }
  })),
);
