"use client";

import styled from "styled-components";

export const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  margin: 0 auto ${({ theme }) => theme.spacing[8]};
  max-width: 1720px;
  padding: ${({ theme }) => `0 ${theme.spacing[2]}`};

  @media (min-width: 1720px) {
    padding: 0;
  }
`;
