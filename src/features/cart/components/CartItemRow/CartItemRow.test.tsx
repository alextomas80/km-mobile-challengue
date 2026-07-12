import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import userEvent from "@testing-library/user-event";

import { CartItemRow } from "./CartItemRow";
import { theme } from "@/styles/theme";
import type { CartItem } from "@/types/cart";

function renderWithProviders(ui: React.ReactElement) {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
}

const item: CartItem = {
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
};

describe("CartItemRow", () => {
  it("renders name, specs and image alt text", () => {
    renderWithProviders(<CartItemRow item={item} onRemove={vi.fn()} />);

    expect(screen.getByText("Galaxy S24 Ultra")).toBeInTheDocument();
    expect(screen.getByText("256GB · Black")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Samsung Galaxy S24 Ultra" })).toBeInTheDocument();
  });

  it("hides the quantity badge when quantity is 1", () => {
    renderWithProviders(<CartItemRow item={item} onRemove={vi.fn()} />);

    expect(screen.queryByText(/ITEMS/)).not.toBeInTheDocument();
  });

  it("shows the quantity badge and multiplies price when quantity is greater than 1", () => {
    renderWithProviders(<CartItemRow item={{ ...item, quantity: 3 }} onRemove={vi.fn()} />);

    expect(screen.getByText("3 ITEMS")).toBeInTheDocument();
    expect(screen.getByText(/3687/)).toBeInTheDocument();
  });

  it("calls onRemove with the item id when Remove is clicked", async () => {
    const user = userEvent.setup();
    const onRemove = vi.fn();
    renderWithProviders(<CartItemRow item={item} onRemove={onRemove} />);

    await user.click(screen.getByRole("button", { name: /remove/i }));

    expect(onRemove).toHaveBeenCalledWith("SMG-S24U::256GB::Black");
  });
});
