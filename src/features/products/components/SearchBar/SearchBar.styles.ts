"use client";

import styled from "styled-components";

export const Input = styled.input`
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  border-color: ${({ theme }) => theme.colors.border};
  border: 0;
  font-size: 1rem;
  padding: ${({ theme }) => theme.spacing[1]} 0;
  width: 100%;

  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;
