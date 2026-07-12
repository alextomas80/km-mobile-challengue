"use client";

import { Toolbar } from "../ProductListContainer/ProductListContainer.styles";
import { ResultsText, SearchInput } from "./ToolbarSkeleton.styles";

export function ToolbarSkeleton() {
  return (
    <Toolbar aria-hidden="true">
      <SearchInput />
      <ResultsText />
    </Toolbar>
  );
}
