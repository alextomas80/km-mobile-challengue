import Image from "next/image";

import type { ProductListItem } from "@/types/product";
import { Body, BodyContent, Brand, Card, ImageWrapper, Name, StyledPrice } from "./ProductCard.styles";

export function ProductCard({ product, priority = false }: { product: ProductListItem; priority?: boolean }) {
  return (
    <Card href={`/products/${product.id}`}>
      <ImageWrapper>
        <Image
          src={product.imageUrl}
          alt={`${product.brand} ${product.name}`}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          style={{ objectFit: "contain" }}
          priority={priority}
        />
      </ImageWrapper>
      <Body>
        <BodyContent>
          <Brand>{product.brand}</Brand>
          <Name>{product.name}</Name>
        </BodyContent>
        <StyledPrice amount={product.basePrice} />
      </Body>
    </Card>
  );
}
