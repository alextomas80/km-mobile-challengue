"use client";

import Image from "next/image";

import type { CartItem } from "@/types/cart";
import { Row, ImageWrapper, Info, Name, Specs, Quantity, StyledPrice, RemoveButton } from "./CartItemRow.styles";

export function CartItemRow({ item, onRemove }: { item: CartItem; onRemove: (id: string) => void }) {
  return (
    <Row>
      <ImageWrapper>
        <Image
          src={item.imageUrl}
          alt={`${item.brand} ${item.name}`}
          fill
          sizes="160px"
          style={{ objectFit: "contain" }}
        />
      </ImageWrapper>

      <Info>
        <Name>{item.name}</Name>
        <Specs>
          {item.storageCapacity} · {item.colorName}
        </Specs>

        {item.quantity > 1 && <Quantity>{item.quantity} ITEMS</Quantity>}
        <StyledPrice amount={item.unitPrice * item.quantity} />

        <RemoveButton type="button" onClick={() => onRemove(item.id)}>
          Remove
        </RemoveButton>
      </Info>
    </Row>
  );
}
