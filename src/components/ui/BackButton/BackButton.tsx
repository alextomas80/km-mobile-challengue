"use client";

import { useRouter } from "next/navigation";
import { StyledBackButton, Chevron } from "./BackButton.styles";

export function BackButton() {
  const router = useRouter();

  return (
    <StyledBackButton type="button" onClick={() => router.back()}>
      <Chevron aria-hidden="true" />
      Back
    </StyledBackButton>
  );
}
