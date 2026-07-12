import { describe, expect, it } from "vitest";

import { cartReducer, initialCartState } from "./cartReducer";
import type { CartItem } from "@/types/cart";

const baseItem: Omit<CartItem, "quantity"> = {
  id: "SMG-S24U::256 GB::Titanium Violet",
  productId: "SMG-S24U",
  name: "Galaxy S24 Ultra",
  brand: "Samsung",
  imageUrl: "http://example.com/img.webp",
  storageCapacity: "256 GB",
  colorName: "Titanium Violet",
  colorHex: "#8E6F96",
  unitPrice: 1229,
};

describe("cartReducer", () => {
  it("adds a new line item with quantity 1", () => {
    const state = cartReducer(initialCartState, { type: "ADD_ITEM", payload: baseItem });
    expect(state.items).toHaveLength(1);
    expect(state.items[0]).toMatchObject({ ...baseItem, quantity: 1 });
  });

  it("increments quantity when the same combo is added again", () => {
    let state = cartReducer(initialCartState, { type: "ADD_ITEM", payload: baseItem });
    state = cartReducer(state, { type: "ADD_ITEM", payload: baseItem });
    expect(state.items).toHaveLength(1);
    expect(state.items[0].quantity).toBe(2);
  });

  it("adds a separate line for a different storage/color combo", () => {
    let state = cartReducer(initialCartState, { type: "ADD_ITEM", payload: baseItem });
    const otherColor: Omit<CartItem, "quantity"> = {
      ...baseItem,
      id: "SMG-S24U::256 GB::Titanium Black",
      colorName: "Titanium Black",
      colorHex: "#000000",
    };
    state = cartReducer(state, { type: "ADD_ITEM", payload: otherColor });
    expect(state.items).toHaveLength(2);
  });

  it("removes a full line item by id", () => {
    let state = cartReducer(initialCartState, { type: "ADD_ITEM", payload: baseItem });
    state = cartReducer(state, { type: "ADD_ITEM", payload: baseItem });
    state = cartReducer(state, { type: "REMOVE_ITEM", payload: { id: baseItem.id } });
    expect(state.items).toHaveLength(0);
  });

  it("clears the cart", () => {
    let state = cartReducer(initialCartState, { type: "ADD_ITEM", payload: baseItem });
    state = cartReducer(state, { type: "CLEAR_CART" });
    expect(state.items).toHaveLength(0);
  });

  it("hydrates from persisted items and marks isHydrated", () => {
    const persisted: CartItem[] = [{ ...baseItem, quantity: 3 }];
    const state = cartReducer(initialCartState, { type: "HYDRATE", payload: persisted });
    expect(state.isHydrated).toBe(true);
    expect(state.items).toEqual(persisted);
  });
});
