import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import userEvent from "@testing-library/user-event";

import { CartList } from "./CartList";
import { theme } from "@/styles/theme";
import type { CartItem } from "@/types/cart";

function renderWithProviders(ui: React.ReactElement) {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
}

const items: CartItem[] = [
  {
    id: "SMG-S24U::256GB::Black",
    productId: "SMG-S24U",
    name: "Galaxy S24 Ultra",
    brand: "Samsung",
    imageUrl: "/s24.webp",
    storageCapacity: "256GB",
    colorName: "Black",
    colorHex: "#000000",
    unitPrice: 1229,
    quantity: 1,
  },
  {
    id: "APL-IP15::128GB::White",
    productId: "APL-IP15",
    name: "iPhone 15",
    brand: "Apple",
    imageUrl: "/ip15.webp",
    storageCapacity: "128GB",
    colorName: "White",
    colorHex: "#ffffff",
    unitPrice: 899,
    quantity: 2,
  },
];

describe("CartList", () => {
  it("renders a row for each cart item", () => {
    renderWithProviders(<CartList items={items} onRemove={vi.fn()} />);

    expect(screen.getByText("Galaxy S24 Ultra")).toBeInTheDocument();
    expect(screen.getByText("iPhone 15")).toBeInTheDocument();
  });

  it("renders nothing when items is empty", () => {
    renderWithProviders(<CartList items={[]} onRemove={vi.fn()} />);

    expect(screen.queryAllByRole("button", { name: /remove/i })).toHaveLength(0);
  });

  it("calls onRemove with the item id when Remove is clicked", async () => {
    const user = userEvent.setup();
    const onRemove = vi.fn();
    renderWithProviders(<CartList items={items} onRemove={onRemove} />);

    await user.click(screen.getAllByRole("button", { name: /remove/i })[0]);

    expect(onRemove).toHaveBeenCalledWith("SMG-S24U::256GB::Black");
  });
});
