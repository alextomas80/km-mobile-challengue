"use client";

import styled from "styled-components";

export const ListContainer = styled.div`
  flex: 1;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing[4]};
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
