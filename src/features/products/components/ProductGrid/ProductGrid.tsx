import { Grid } from "./ProductGrid.styles";
import { ProductCard } from "../ProductCard";
import type { ProductListItem } from "@/types/product";

export function ProductGrid({ products }: { products: ProductListItem[] }) {
  return (
    <Grid>
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} priority={index < 2} />
      ))}
    </Grid>
  );
}
