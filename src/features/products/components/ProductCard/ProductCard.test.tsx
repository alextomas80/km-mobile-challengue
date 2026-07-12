import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { ProductCard } from "./ProductCard";
import { theme } from "@/styles/theme";
import type { ProductListItem } from "@/types/product";

const product: ProductListItem = {
  id: "SMG-S24U",
  brand: "Samsung",
  name: "Galaxy S24 Ultra",
  basePrice: 1229,
  imageUrl: "/s24.webp",
};

function renderWithProviders(ui: React.ReactElement) {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
}

describe("ProductCard", () => {
  it("renders brand, name and price", () => {
    renderWithProviders(<ProductCard product={product} />);

    expect(screen.getByText("Samsung")).toBeInTheDocument();
    expect(screen.getByText("Galaxy S24 Ultra")).toBeInTheDocument();
    expect(screen.getByText(/1229/)).toBeInTheDocument();
  });

  it("links to the product detail page", () => {
    renderWithProviders(<ProductCard product={product} />);

    expect(screen.getByRole("link", { name: /galaxy s24 ultra/i })).toHaveAttribute("href", "/products/SMG-S24U");
  });

  it("renders the product image with a descriptive alt text", () => {
    renderWithProviders(<ProductCard product={product} />);

    expect(screen.getByRole("img", { name: "Samsung Galaxy S24 Ultra" })).toBeInTheDocument();
  });
});
