import { describe, expect, it } from "vitest";

import { formatPrice } from "./formatPrice";

describe("formatPrice", () => {
  it("formats an integer amount as EUR currency", () => {
    const result = formatPrice(1329);

    expect(result).toContain("1329");
    expect(result).toContain("EUR");
  });

  it("formats a decimal amount rounded to 2 places", () => {
    const result = formatPrice(9);

    expect(result).toContain("9");
    expect(result).toContain("EUR");
  });
});
