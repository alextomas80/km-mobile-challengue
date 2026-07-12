"use client";

import { Input } from "./SearchBar.styles";

export function SearchBar({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <Input
      type="search"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder="Search for a smartphone..."
      aria-label="Search for a smartphone"
    />
  );
}
