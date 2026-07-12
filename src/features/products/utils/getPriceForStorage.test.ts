import { describe, expect, it } from "vitest";
import { getPriceForStorage } from "./getPriceForStorage";

describe("getPriceForStorage", () => {
  it("returns the base price when no storage is selected", () => {
    expect(getPriceForStorage(999, null)).toBe(999);
  });

  it("returns the storage-specific price when selected", () => {
    expect(getPriceForStorage(999, { capacity: "512 GB", price: 1199 })).toBe(1199);
  });
});
