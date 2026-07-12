import type { ProductDetail, ProductListItem, ProductsQuery } from "@/types/product";
import { fetchJson } from "./httpClient";

export async function getProducts(query: ProductsQuery = {}): Promise<ProductListItem[]> {
  const products = await fetchJson<ProductListItem[]>("/products", {
    search: query.search,
    limit: query.limit,
    offset: query.offset,
  });

  const seen = new Set<string>();
  return products.filter((product) => {
    if (seen.has(product.id)) return false;
    seen.add(product.id);
    return true;
  });
}

export function getProductById(id: string): Promise<ProductDetail> {
  return fetchJson<ProductDetail>(`/products/${encodeURIComponent(id)}`);
}
