"use client";

import styled, { keyframes } from "styled-components";

const fade = keyframes`
  0%,
  100% {
    opacity: 0.7;
  }
  50% {
    opacity: 0.55;
  }
`;

export const Skeleton = styled.div`
  background: ${({ theme }) => theme.colors.border};
  animation: ${fade} 3s ease-in-out infinite;
`;
