"use client";

import styled from "styled-components";

export const PageDetailsContainer = styled.main`
  margin: 0 auto ${({ theme }) => theme.spacing[8]};
  max-width: 1200px;
  padding: ${({ theme }) => `0 ${theme.spacing[2]}`};
`;
