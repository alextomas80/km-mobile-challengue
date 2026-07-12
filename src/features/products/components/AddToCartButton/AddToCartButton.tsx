"use client";

import { useRouter } from "next/navigation";

import { buildCartItemId } from "@/features/cart/utils/buildCartItemId";
import { Button } from "./AddToCartButton.styles";
import { useCart } from "@/hooks/useCart";
import type { ColorOption, ProductDetail, StorageOption } from "@/types/product";

export function AddToCartButton({
  product,
  selectedColor,
  selectedStorage,
  currentPrice,
  canAddToCart,
}: {
  product: ProductDetail;
  selectedColor: ColorOption | null;
  selectedStorage: StorageOption | null;
  currentPrice: number;
  canAddToCart: boolean;
}) {
  const { addItem } = useCart();
  const router = useRouter();

  function handleClick() {
    if (!selectedColor || !selectedStorage) {
      return;
    }
    addItem({
      id: buildCartItemId(product.id, selectedStorage.capacity, selectedColor.name),
      productId: product.id,
      name: product.name,
      brand: product.brand,
      imageUrl: selectedColor.imageUrl,
      storageCapacity: selectedStorage.capacity,
      colorName: selectedColor.name,
      colorHex: selectedColor.hexCode,
      unitPrice: currentPrice,
    });
    router.push("/cart");
  }

  return (
    <Button type="button" disabled={!canAddToCart} onClick={handleClick}>
      Add
    </Button>
  );
}
