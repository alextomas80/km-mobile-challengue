export interface CartItem {
  /** Composite key: `${productId}::${storageCapacity}::${colorName}` */
  id: string;
  productId: string;
  name: string;
  brand: string;
  imageUrl: string;
  storageCapacity: string;
  colorName: string;
  colorHex: string;
  unitPrice: number;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  isHydrated: boolean;
}

export type CartAction =
  | { type: "HYDRATE"; payload: CartItem[] }
  | { type: "ADD_ITEM"; payload: Omit<CartItem, "quantity"> }
  | { type: "REMOVE_ITEM"; payload: { id: string } }
  | { type: "CLEAR_CART" };
