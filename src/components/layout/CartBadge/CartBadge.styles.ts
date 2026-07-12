"use client";

import styled from "styled-components";

export const Badge = styled.span`
  align-items: center;
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  justify-content: center;
  margin-left: ${({ theme }) => theme.spacing[1]};
  position: relative;
  top: 3px;
`;
