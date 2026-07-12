"use client";

import styled from "styled-components";
import { Button } from "@/components/ui/Button";

const Wrapper = styled.main`
  max-width: 600px;
  margin: ${({ theme }) => theme.spacing[8]} auto;
  padding: ${({ theme }) => theme.spacing[3]};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
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
