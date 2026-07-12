"use client";

import styled, { css } from "styled-components";

type Variant = "primary" | "secondary" | "danger";

export const variantStyles = {
  primary: css`
    background: ${({ theme }) => theme.colors.buttonPrimary};
    color: #fff;
  `,
  secondary: css`
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.text};

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.background};
    }
  `,
  danger: css`
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.danger};
    padding: 0;
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    text-decoration: none !important;

    &:hover:not(:disabled) {
      text-decoration: underline;
    }
  `,
};

export const baseButtonStyles = css`
  align-items: center;
  border: none;
  cursor: pointer;
  display: inline-flex;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 300;
  gap: ${({ theme }) => theme.spacing[1]};
  height: 56px;
  justify-content: center;
  min-width: 260px;
  padding: ${({ theme }) => `${theme.spacing[1.5]} ${theme.spacing[2.5]}`};
  transition:
    background-color 0.15s ease,
    border-color 0.15s ease,
    opacity 0.15s ease;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const Button = styled.button<{ $variant?: Variant }>`
  ${baseButtonStyles}
  ${({ $variant = "primary" }) => variantStyles[$variant]}
`;
