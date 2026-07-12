"use client";

import { Button } from "@/components/ui/Button";
import { useCart } from "@/hooks/useCart";

export function PayButton() {
  const { clearCart } = useCart();

  return (
    <Button type="button" $variant="primary" onClick={clearCart}>
      Pay
    </Button>
  );
}
