import { render, screen } from "@testing-library/react";
import { useEffect } from "react";
import { describe, expect, it, beforeEach } from "vitest";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import { CartProvider } from "@/context/cart/CartContext";
import { useCart } from "@/hooks/useCart";
import { Navbar } from "./Navbar";

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

function CartSeeder({ shouldAdd }: { shouldAdd: boolean }) {
  const { addItem, isHydrated } = useCart();

  useEffect(() => {
    if (shouldAdd && isHydrated) {
      addItem(item);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldAdd, isHydrated]);

  return null;
}

function renderNavbar({ withCartItem = false } = {}) {
  return render(
    <ThemeProvider theme={theme}>
      <CartProvider>
        <Navbar />
        <CartSeeder shouldAdd={withCartItem} />
      </CartProvider>
    </ThemeProvider>,
  );
}

describe("Navbar", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("renders a link to the home page with the logo", () => {
    renderNavbar();

    const homeLink = screen.getByRole("link", { name: "Go to home" });
    expect(homeLink).toHaveAttribute("href", "/");
    expect(screen.getByAltText("Application logo")).toBeInTheDocument();
  });

  it("renders a link to the cart page with the bag icon", () => {
    renderNavbar();

    const cartLink = screen.getByRole("link", { name: "View shopping cart" });
    expect(cartLink).toHaveAttribute("href", "/cart");
    expect(screen.getByAltText("Shopping cart icon")).toBeInTheDocument();
  });

  it("shows the cart badge with 0 when the cart is empty", () => {
    renderNavbar();

    expect(screen.getByLabelText("0 items in cart")).toHaveTextContent("0");
  });

  it("shows the cart badge with the item count once the cart is hydrated with items", async () => {
    renderNavbar({ withCartItem: true });

    expect(await screen.findByLabelText("1 items in cart")).toHaveTextContent("1");
  });
});
