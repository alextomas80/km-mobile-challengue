"use client";

import { useMemo, useState } from "react";
import type { ProductDetail } from "@/types/product";
import { getPriceForStorage } from "../utils/getPriceForStorage";

export function useProductSelection(product: ProductDetail) {
  const [selectedColorName, setSelectedColorName] = useState<string | null>(null);
  const [selectedStorageCapacity, setSelectedStorageCapacity] = useState<string | null>(null);

  const selectedColor = useMemo(
    () => product.colorOptions.find((color) => color.name === selectedColorName) ?? null,
    [product.colorOptions, selectedColorName],
  );

  const selectedStorage = useMemo(
    () => product.storageOptions.find((storage) => storage.capacity === selectedStorageCapacity) ?? null,
    [product.storageOptions, selectedStorageCapacity],
  );

  const displayImageUrl = selectedColor?.imageUrl ?? product.colorOptions[0]?.imageUrl;
  const currentPrice = getPriceForStorage(product.basePrice, selectedStorage);
  const canAddToCart = Boolean(selectedColor && selectedStorage);
  const basePrice = product.basePrice;

  return {
    selectedColor,
    selectedStorage,
    displayImageUrl,
    currentPrice,
    canAddToCart,
    basePrice,
    actions: {
      selectColor: setSelectedColorName,
      selectStorage: setSelectedStorageCapacity,
    },
  };
}
