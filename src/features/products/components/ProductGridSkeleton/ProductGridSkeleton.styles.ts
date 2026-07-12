import styled from "styled-components";

import { Skeleton } from "@/components/ui/Skeleton";

export const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const Card = styled(Skeleton)`
  aspect-ratio: 1 / 1;
`;
