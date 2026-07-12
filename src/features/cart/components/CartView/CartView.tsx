"use client";

import { CartList } from "../CartList";
import { CartSummary } from "../CartSummary";
import { ContinueShoppingButton } from "../ContinueShoppingButton";
import { PayButton } from "../PayButton";
import { useCart } from "@/hooks/useCart";
import { Wrapper, Title, Footer } from "./CartView.styles";

export function CartView() {
  const { items, itemCount, totalPrice, removeItem } = useCart();

  return (
    <Wrapper>
      <Title>Cart ({itemCount})</Title>

      <CartList items={items} onRemove={removeItem} />

      <Footer>
        <ContinueShoppingButton />

        {totalPrice > 0 && (
          <>
            <CartSummary total={totalPrice} />
            <PayButton />
          </>
        )}
      </Footer>
    </Wrapper>
  );
}
