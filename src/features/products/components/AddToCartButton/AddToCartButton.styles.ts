"use client";

import styled from "styled-components";

export const Button = styled.button`
  align-items: center;
  background: ${({ theme }) => theme.colors.buttonPrimary};
  border: none;
  color: ${({ theme }) => theme.colors.surface};
  cursor: pointer;
  display: inline-flex;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 300;
  gap: ${({ theme }) => theme.spacing[1]};
  height: 56px;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing[8]};
  padding: ${({ theme }) => `${theme.spacing[1.5]} ${theme.spacing[2.5]}`};
  text-transform: uppercase;
  transition:
    background-color 0.15s ease,
    border-color 0.15s ease,
    opacity 0.15s ease;

  &:disabled {
    background: ${({ theme }) => theme.colors.buttonDisabled};
    color: ${({ theme }) => theme.colors.textMuted};
    cursor: not-allowed;
  }
`;
