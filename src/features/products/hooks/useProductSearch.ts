"use client";

import { useEffect, useRef, useState } from "react";
import { useDebouncedValue } from "@/hooks/useDebouncedValue";
import type { ProductListItem } from "@/types/product";

const RESULTS_LIMIT = 20;
const DEBOUNCE_MS = 350;

export function useProductSearch(initialProducts: ProductListItem[]) {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState(initialProducts);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [retryToken, setRetryToken] = useState(0);

  const debouncedSearchTerm = useDebouncedValue(searchTerm, DEBOUNCE_MS);
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    const controller = new AbortController();

    async function fetchProducts() {
      setIsLoading(true);
      setError(false);
      try {
        const params = new URLSearchParams({ limit: String(RESULTS_LIMIT) });
        if (debouncedSearchTerm) {
          params.set("search", debouncedSearchTerm);
        }
        const response = await fetch(`/api/products?${params.toString()}`, {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = (await response.json()) as ProductListItem[];
        setProducts(data);
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          setError(true);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    fetchProducts();

    return () => controller.abort();
  }, [debouncedSearchTerm, retryToken]);

  const retry = () => setRetryToken((token) => token + 1);

  return { searchTerm, setSearchTerm, products, isLoading, error, retry };
}
