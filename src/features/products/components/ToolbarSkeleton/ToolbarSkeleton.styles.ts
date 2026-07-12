import styled from "styled-components";

import { Skeleton } from "@/components/ui/Skeleton";

export const SearchInput = styled(Skeleton)`
  border-radius: ${({ theme }) => theme.radii.sm};
  height: 38px;
  width: 100%;
`;

export const ResultsText = styled(Skeleton)`
  border-radius: ${({ theme }) => theme.radii.sm};
  height: 16px;
  width: 90px;
`;
