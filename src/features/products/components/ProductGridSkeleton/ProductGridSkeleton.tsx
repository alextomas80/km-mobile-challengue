"use client";

import { Card, Grid } from "./ProductGridSkeleton.styles";

export function ProductGridSkeleton({ count = 10 }: { count?: number }) {
  return (
    <Grid aria-hidden="true">
      {Array.from({ length: count }).map((_, index) => (
        <Card key={index} />
      ))}
    </Grid>
  );
}
