import { beforeEach, describe, expect, it } from "vitest";

import { loadCart, saveCart } from "./cartStorage";
import type { CartItem } from "@/types/cart";

const item: CartItem = {
  id: "SMG-S24U::256 GB::Titanium Violet",
  productId: "SMG-S24U",
  name: "Galaxy S24 Ultra",
  brand: "Samsung",
  imageUrl: "http://example.com/img.webp",
  storageCapacity: "256 GB",
  colorName: "Titanium Violet",
  colorHex: "#8E6F96",
  unitPrice: 1229,
  quantity: 1,
};

describe("cartStorage", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("returns an empty array when nothing is stored", () => {
    expect(loadCart()).toEqual([]);
  });

  it("saves and reloads cart items", () => {
    saveCart([item]);
    expect(loadCart()).toEqual([item]);
  });

  it("falls back to an empty array on corrupt JSON", () => {
    window.localStorage.setItem("phone-catalog:cart", "{not-json");
    expect(loadCart()).toEqual([]);
  });

  it("falls back to an empty array when stored value is not an array", () => {
    window.localStorage.setItem("phone-catalog:cart", JSON.stringify({ foo: "bar" }));
    expect(loadCart()).toEqual([]);
  });
});
