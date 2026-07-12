"use client";

import { useCart } from "@/hooks/useCart";
import { Badge } from "./CartBadge.styles";

export function CartBadge() {
  const { itemCount } = useCart();

  return <Badge aria-label={`${itemCount} items in cart`}>{itemCount ?? 0}</Badge>;
}
