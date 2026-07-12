"use client";

import { ResultsText, SearchInput } from "./ToolbarSkeleton.styles";
import { Toolbar } from "../ProductListContainer/ProductListContainer.styles";

export function ToolbarSkeleton() {
  return (
    <Toolbar aria-hidden="true">
      <SearchInput />
      <ResultsText />
    </Toolbar>
  );
}
