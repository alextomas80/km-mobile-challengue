"use client";

import { Badge } from "./CartBadge.styles";
import { useCart } from "@/hooks/useCart";

export function CartBadge() {
  const { itemCount } = useCart();

  return <Badge aria-label={`${itemCount} items in cart`}>{itemCount ?? 0}</Badge>;
}
