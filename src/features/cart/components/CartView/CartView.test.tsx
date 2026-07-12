import { describe, expect, it, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { useEffect } from "react";
import userEvent from "@testing-library/user-event";

import { CartProvider } from "@/context/cart/CartContext";
import { CartView } from "./CartView";
import { theme } from "@/styles/theme";
import { useCart } from "@/hooks/useCart";

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

function CartSeeder({ quantity }: { quantity: number }) {
  const { addItem, isHydrated } = useCart();

  useEffect(() => {
    if (isHydrated) {
      for (let i = 0; i < quantity; i += 1) {
        addItem(item);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHydrated, quantity]);

  return null;
}

function renderCartView({ quantity = 0 } = {}) {
  return render(
    <ThemeProvider theme={theme}>
      <CartProvider>
        <CartView />
        <CartSeeder quantity={quantity} />
      </CartProvider>
    </ThemeProvider>,
  );
}

describe("CartView", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("shows the cart title with the item count", async () => {
    renderCartView({ quantity: 2 });

    expect(await screen.findByText("Cart (2)")).toBeInTheDocument();
  });

  it("hides the totals and pay section when the cart is empty", () => {
    renderCartView({ quantity: 0 });

    expect(screen.getByText("Cart (0)")).toBeInTheDocument();
    expect(screen.queryByText("Total")).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Pay" })).not.toBeInTheDocument();
  });

  it("shows the totals and pay section once an item is added", async () => {
    renderCartView({ quantity: 1 });

    expect(await screen.findByText("Total")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Pay" })).toBeInTheDocument();
    expect(screen.getByText("Galaxy S24 Ultra")).toBeInTheDocument();
  });

  it("hides the totals and pay section again after removing the last item", async () => {
    const user = userEvent.setup();
    renderCartView({ quantity: 1 });

    const removeButton = await screen.findByRole("button", { name: "Remove" });
    await user.click(removeButton);

    await waitFor(() => {
      expect(screen.queryByText("Total")).not.toBeInTheDocument();
    });
    expect(screen.getByText("Cart (0)")).toBeInTheDocument();
  });
});
