"use client";

import { ThemeProvider } from "styled-components";

import { CartProvider } from "@/context/cart/CartContext";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CartProvider>{children}</CartProvider>
    </ThemeProvider>
  );
}
