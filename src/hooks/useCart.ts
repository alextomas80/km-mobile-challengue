"use client";

import { useContext, useMemo } from "react";
import { CartContext } from "@/context/cart/CartContext";
import type { CartItem } from "@/types/cart";

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  const { state, dispatch } = context;

  const itemCount = useMemo(
    () => state.items.reduce((sum, item) => sum + item.quantity, 0),
    [state.items],
  );

  const totalPrice = useMemo(
    () => state.items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0),
    [state.items],
  );

  const addItem = (item: Omit<CartItem, "quantity">) =>
    dispatch({ type: "ADD_ITEM", payload: item });

  const removeItem = (id: string) => dispatch({ type: "REMOVE_ITEM", payload: { id } });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return {
    items: state.items,
    isHydrated: state.isHydrated,
    itemCount,
    totalPrice,
    addItem,
    removeItem,
    clearCart,
  };
}
