"use client";

import styled from "styled-components";

export const Toolbar = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1.5]};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => `${theme.spacing[3]} 0 ${theme.spacing[3]}`};
  position: sticky;
  top: 80px;
  transition: all 0.3s ease-in-out;
  z-index: 10;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-bottom: ${({ theme }) => theme.spacing[6]};
    padding: ${({ theme }) => `${theme.spacing[6]} 0 ${theme.spacing[3]}`};
  }
`;
