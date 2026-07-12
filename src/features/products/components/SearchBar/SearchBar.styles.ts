"use client";

import styled from "styled-components";

export const Input = styled.input`
  background: ${({ theme }) => theme.colors.surface};
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  border-color: ${({ theme }) => theme.colors.border};
  font-size: 1rem;
  padding: ${({ theme }) => theme.spacing[1]} 0;
  width: 100%;

  &:focus {
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;
