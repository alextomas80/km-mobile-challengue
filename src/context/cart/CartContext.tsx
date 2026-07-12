"use client";

import { createContext, useEffect, useReducer } from "react";
import type { Dispatch } from "react";
import type { CartAction, CartState } from "@/types/cart";
import { cartReducer, initialCartState } from "./cartReducer";
import { loadCart, saveCart } from "./cartStorage";

export const CartContext = createContext<
  { state: CartState; dispatch: Dispatch<CartAction> } | undefined
>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  useEffect(() => {
    dispatch({ type: "HYDRATE", payload: loadCart() });
  }, []);

  useEffect(() => {
    if (state.isHydrated) {
      saveCart(state.items);
    }
  }, [state.items, state.isHydrated]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
