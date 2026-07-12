import type { ProductListItem } from "@/types/product";
import { ProductCard } from "../ProductCard";
import { Grid } from "./ProductGrid.styles";

export function ProductGrid({ products }: { products: ProductListItem[] }) {
  return (
    <Grid>
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} priority={index < 2} />
      ))}
    </Grid>
  );
}
