"use client";

import styled from "styled-components";

export const Text = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.md};
  text-transform: uppercase;
`;
