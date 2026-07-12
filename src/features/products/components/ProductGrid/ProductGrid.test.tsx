import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { ProductGrid } from "./ProductGrid";
import { theme } from "@/styles/theme";
import type { ProductListItem } from "@/types/product";

const products: ProductListItem[] = [
  { id: "SMG-S24U", brand: "Samsung", name: "Galaxy S24 Ultra", basePrice: 1229, imageUrl: "/s24.webp" },
  { id: "APL-IP15", brand: "Apple", name: "iPhone 15", basePrice: 999, imageUrl: "/ip15.webp" },
];

function renderWithProviders(ui: React.ReactElement) {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
}

describe("ProductGrid", () => {
  it("renders one card per product", () => {
    renderWithProviders(<ProductGrid products={products} />);

    expect(screen.getAllByRole("link")).toHaveLength(2);
    expect(screen.getByText("Galaxy S24 Ultra")).toBeInTheDocument();
    expect(screen.getByText("iPhone 15")).toBeInTheDocument();
  });

  it("links each card to its product detail page", () => {
    renderWithProviders(<ProductGrid products={products} />);

    expect(screen.getByRole("link", { name: /galaxy s24 ultra/i })).toHaveAttribute("href", "/products/SMG-S24U");
    expect(screen.getByRole("link", { name: /iphone 15/i })).toHaveAttribute("href", "/products/APL-IP15");
  });

  it("renders nothing but the grid container when there are no products", () => {
    renderWithProviders(<ProductGrid products={[]} />);

    expect(screen.queryAllByRole("link")).toHaveLength(0);
  });
});
