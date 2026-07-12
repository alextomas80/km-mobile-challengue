"use client";

import styled from "styled-components";

import { Button } from "@/components/ui/Button";

const Wrapper = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  margin: ${({ theme }) => theme.spacing[8]} auto;
  max-width: 600px;
  padding: ${({ theme }) => theme.spacing[3]};
  text-align: center;
`;

export default function ProductDetailError({ reset }: { error: Error; reset: () => void }) {
  return (
    <Wrapper>
      <p>We could not load this phone.</p>
      <Button type="button" onClick={reset}>
        Retry
      </Button>
    </Wrapper>
  );
}
