"use client";

import styled from "styled-components";

export const StyledBackButton = styled.button`
  align-items: center;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 300;
  gap: ${({ theme }) => theme.spacing[1]};
  letter-spacing: 0.05em;
  padding: ${({ theme }) => theme.spacing[2]};
  text-transform: uppercase;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 0.6;
  }
`;

export const Chevron = styled.span`
  border-bottom: 1px solid currentColor;
  border-left: 1px solid currentColor;
  display: inline-block;
  height: 6px;
  transform: rotate(45deg);
  width: 6px;
`;
