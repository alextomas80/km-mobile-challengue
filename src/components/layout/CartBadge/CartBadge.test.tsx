import { render, screen } from "@testing-library/react";
import { useEffect } from "react";
import { describe, expect, it, beforeEach } from "vitest";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import { CartProvider } from "@/context/cart/CartContext";
import { useCart } from "@/hooks/useCart";
import { CartBadge } from "./CartBadge";

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

function renderCartBadge({ quantity = 0 } = {}) {
  return render(
    <ThemeProvider theme={theme}>
      <CartProvider>
        <CartBadge />
        <CartSeeder quantity={quantity} />
      </CartProvider>
    </ThemeProvider>,
  );
}

describe("CartBadge", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("shows 0 while the cart has not hydrated yet", () => {
    renderCartBadge();

    expect(screen.getByLabelText("0 items in cart")).toHaveTextContent("0");
  });

  it("shows 0 when the cart is hydrated but empty", async () => {
    renderCartBadge({ quantity: 0 });

    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(screen.getByLabelText("0 items in cart")).toHaveTextContent("0");
  });

  it("shows the item count once the cart is hydrated with a single item", async () => {
    renderCartBadge({ quantity: 1 });

    expect(await screen.findByLabelText("1 items in cart")).toHaveTextContent("1");
  });

  it("shows the accumulated quantity when multiple units are added", async () => {
    renderCartBadge({ quantity: 3 });

    expect(await screen.findByLabelText("3 items in cart")).toHaveTextContent("3");
  });
});
