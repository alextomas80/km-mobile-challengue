import type { StorageOption } from "@/types/product";

export function getPriceForStorage(basePrice: number, storage: StorageOption | null): number {
  return storage?.price ?? basePrice;
}
