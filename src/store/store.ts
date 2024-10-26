import { create } from "zustand";
import { Product, ProductInCart } from "../types/productTypes.ts";

interface ProductsStore {
  products: Product[];
  cart: ProductInCart[];
  addToCart: (product: Product) => void;
  setProducts: (products: Product[]) => void;
  removeFromCart: (id: number) => void;
  cleanCart: () => void;
  decreaseAmountInCart: (id: number) => void;
  increaseAmountInCart: (id: number) => void;
  totalPrice: number;
}

export const useProductStore = create<ProductsStore>((set) => ({
  products: [],
  cart: [],
  totalPrice: 0,
  setProducts: (products: Product[]) => set({ products }),
  addToCart: (newProduct: Product) => {
    set((state) => {
      const existingProduct = state.cart.find(
        (item) => item.id === newProduct.id,
      );
      if (existingProduct) {
        return {
          cart: state.cart.map((item) =>
            item.id === newProduct.id
              ? { ...item, amount: item.amount + 1 }
              : item,
          ),
          totalPrice: Number(
            (state.totalPrice + Number(newProduct.price)).toFixed(2),
          ),
        };
      } else {
        return {
          cart: [...state.cart, { ...newProduct, amount: 1 }],
          totalPrice: Number(
            (state.totalPrice + Number(newProduct.price)).toFixed(2),
          ),
        };
      }
    });
  },

  removeFromCart: (id: number) => {
    set((state) => {
      const existingProduct = state.cart.find((item) => item.id === id);
      return {
        cart: state.cart.filter((product) => product.id !== id),
        totalPrice: existingProduct
          ? Number(
              (
                state.totalPrice -
                Number(existingProduct.price) * existingProduct.amount
              ).toFixed(2),
            )
          : state.totalPrice,
      };
    });
  },

  increaseAmountInCart: (id: number) => {
    set((state) => {
      const existingProduct = state.cart.find((item) => item.id === id);
      return {
        cart: state.cart.map((item) =>
          item.id === id ? { ...item, amount: item.amount + 1 } : item,
        ),
        totalPrice: Number(
          (
            state.totalPrice +
            (existingProduct ? Number(existingProduct.price) : 0)
          ).toFixed(2),
        ),
      };
    });
  },

  decreaseAmountInCart: (id: number) => {
    set((state) => {
      const existingProduct = state.cart.find((item) => item.id === id);
      if (!existingProduct) return state;

      if (existingProduct.amount === 1) {
        return {
          cart: state.cart.filter((product) => product.id !== id),
          totalPrice: Number(
            (state.totalPrice - Number(existingProduct.price)).toFixed(2),
          ),
        };
      }

      return {
        cart: state.cart.map((item) =>
          item.id === id ? { ...item, amount: item.amount - 1 } : item,
        ),
        totalPrice: Number(
          (state.totalPrice - Number(existingProduct.price)).toFixed(2),
        ),
      };
    });
  },

  cleanCart: () => {
    set({ cart: [], totalPrice: 0 });
  },
}));
