import { act, renderHook, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { CartProvider } from "@/context/cart/CartContext";
import { useCart } from "./useCart";

const item = {
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

describe("useCart", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("adds items, computes itemCount/totalPrice, and persists to localStorage", async () => {
    const { result } = renderHook(() => useCart(), { wrapper: CartProvider });

    await waitFor(() => expect(result.current.isHydrated).toBe(true));

    act(() => result.current.addItem(item));
    await waitFor(() => expect(result.current.items).toHaveLength(1));

    expect(result.current.itemCount).toBe(1);
    expect(result.current.totalPrice).toBe(1229);

    const stored = JSON.parse(window.localStorage.getItem("phone-catalog:cart") ?? "[]");
    expect(stored).toHaveLength(1);
  });

  it("removes an item", async () => {
    const { result } = renderHook(() => useCart(), { wrapper: CartProvider });
    await waitFor(() => expect(result.current.isHydrated).toBe(true));

    act(() => result.current.addItem(item));
    await waitFor(() => expect(result.current.items).toHaveLength(1));

    act(() => result.current.removeItem(item.id));
    await waitFor(() => expect(result.current.items).toHaveLength(0));
  });

  it("throws when used outside a CartProvider", () => {
    expect(() => renderHook(() => useCart())).toThrow(
      "useCart must be used within a CartProvider",
    );
  });
});
