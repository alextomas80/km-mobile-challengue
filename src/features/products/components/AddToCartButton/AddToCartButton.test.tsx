import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi, beforeEach } from "vitest";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import { CartProvider } from "@/context/cart/CartContext";
import { useCart } from "@/hooks/useCart";
import { AddToCartButton } from "./AddToCartButton";
import type { ColorOption, ProductDetail, StorageOption } from "@/types/product";

const push = vi.fn();
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push }),
}));

const product: ProductDetail = {
  id: "SMG-S24U",
  brand: "Samsung",
  name: "Galaxy S24 Ultra",
  description: "desc",
  basePrice: 1229,
  rating: 4.6,
  specs: {
    screen: "",
    resolution: "",
    processor: "",
    mainCamera: "",
    selfieCamera: "",
    battery: "",
    os: "",
    screenRefreshRate: "",
  },
  colorOptions: [{ name: "Titanium Violet", hexCode: "#8E6F96", imageUrl: "img.webp" }],
  storageOptions: [{ capacity: "256 GB", price: 1229 }],
  similarProducts: [],
};

const color: ColorOption = product.colorOptions[0];
const storage: StorageOption = product.storageOptions[0];

function CartSnapshot() {
  const { items } = useCart();
  return <div data-testid="cart-items">{JSON.stringify(items)}</div>;
}

function renderWithProviders(ui: React.ReactElement) {
  return render(
    <ThemeProvider theme={theme}>
      <CartProvider>
        {ui}
        <CartSnapshot />
      </CartProvider>
    </ThemeProvider>,
  );
}

describe("AddToCartButton", () => {
  beforeEach(() => {
    window.localStorage.clear();
    push.mockClear();
  });

  it("is disabled until both color and storage are selected", () => {
    renderWithProviders(
      <AddToCartButton
        product={product}
        selectedColor={null}
        selectedStorage={null}
        currentPrice={product.basePrice}
        canAddToCart={false}
      />,
    );
    expect(screen.getByRole("button", { name: /add/i })).toBeDisabled();
  });

  it("adds the exact selected combo to the cart when enabled and clicked", async () => {
    const user = userEvent.setup();
    renderWithProviders(
      <AddToCartButton
        product={product}
        selectedColor={color}
        selectedStorage={storage}
        currentPrice={1229}
        canAddToCart
      />,
    );

    const button = screen.getByRole("button", { name: /add/i });
    expect(button).toBeEnabled();

    await user.click(button);

    await waitFor(() => {
      const stored = JSON.parse(screen.getByTestId("cart-items").textContent ?? "[]");
      expect(stored).toHaveLength(1);
      expect(stored[0]).toMatchObject({
        productId: "SMG-S24U",
        colorName: "Titanium Violet",
        storageCapacity: "256 GB",
        unitPrice: 1229,
        quantity: 1,
      });
    });

    expect(push).toHaveBeenCalledWith("/cart");
  });
});
