"use client";

import { CartItemRow } from "../CartItemRow";
import { ListContainer, List } from "./CartList.styles";
import type { CartItem } from "@/types/cart";

export function CartList({ items, onRemove }: { items: CartItem[]; onRemove: (id: string) => void }) {
  return (
    <ListContainer>
      <List>
        {items.map((item) => (
          <CartItemRow key={item.id} item={item} onRemove={onRemove} />
        ))}
      </List>
    </ListContainer>
  );
}
