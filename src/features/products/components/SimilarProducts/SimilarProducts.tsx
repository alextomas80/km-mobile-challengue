"use client";

import type { ProductListItem } from "@/types/product";
import { ProductCard } from "../ProductCard";
import { Section, Heading, Scroller, Item } from "./SimilarProducts.styles";

export function SimilarProducts({ products }: { products: ProductListItem[] }) {
  if (products.length === 0) {
    return null;
  }

  return (
    <Section>
      <Heading>Similar items </Heading>
      <Scroller>
        {products.map((product) => (
          <Item key={product.id}>
            <ProductCard product={product} />
          </Item>
        ))}
      </Scroller>
    </Section>
  );
}
