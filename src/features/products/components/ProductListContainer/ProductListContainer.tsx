"use client";

import { ProductGrid } from "../ProductGrid";
import { ProductGridSkeleton } from "../ProductGridSkeleton";
import { ProductListEmpty, ProductListError } from "../ProductListMessage";
import { ResultsCount } from "../ResultsCount";
import { SearchBar } from "../SearchBar";
import { Toolbar } from "./ProductListContainer.styles";
import { useProductSearch } from "../../hooks/useProductSearch";
import type { ProductListItem } from "@/types/product";

export function ProductListContainer({ initialProducts }: { initialProducts: ProductListItem[] }) {
  const { searchTerm, setSearchTerm, products, isLoading, error, retry } = useProductSearch(initialProducts);

  return (
    <>
      <Toolbar>
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <ResultsCount count={products.length} />
      </Toolbar>

      {error ? (
        <ProductListError onRetry={retry} />
      ) : isLoading ? (
        <ProductGridSkeleton />
      ) : products.length === 0 ? (
        <ProductListEmpty query={searchTerm} />
      ) : (
        <ProductGrid products={products} />
      )}
    </>
  );
}
