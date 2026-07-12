export function buildCartItemId(productId: string, storageCapacity: string, colorName: string): string {
  return `${productId}::${storageCapacity}::${colorName}`;
}
