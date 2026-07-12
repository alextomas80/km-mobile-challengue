"use client";

import { List, Pill } from "./StorageSelector.styles";
import type { StorageOption } from "@/types/product";

export function StorageSelector({
  storageOptions,
  selectedCapacity,
  onSelect,
}: {
  storageOptions: StorageOption[];
  selectedCapacity?: string;
  onSelect: (capacity: string) => void;
}) {
  return (
    <div>
      <List role="radiogroup" aria-label="Select storage">
        {storageOptions.map((storage) => (
          <Pill
            key={storage.capacity}
            type="button"
            role="radio"
            aria-checked={storage.capacity === selectedCapacity}
            $selected={storage.capacity === selectedCapacity}
            onClick={() => onSelect(storage.capacity)}
          >
            {storage.capacity}
          </Pill>
        ))}
      </List>
    </div>
  );
}
