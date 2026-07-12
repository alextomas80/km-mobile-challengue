import styled, { css } from "styled-components";

export const List = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  flex-wrap: wrap;
`;

export const Swatch = styled.button<{ $color: string; $selected: boolean }>`
  width: 24px;
  height: 24px;
  padding: 1px;
  background: transparent;
  border: 2px solid ${({ theme, $selected }) => ($selected ? theme.colors.text : theme.colors.textMuted)};
  cursor: pointer;
  transition: border-color 0.35s ease;

  ${({ $selected }) =>
    $selected &&
    css`
      border-width: 2px;
      padding: 1px;
    `}

  &:hover {
    border-color: ${({ theme }) => theme.colors.text};
  }
`;

export const SwatchColor = styled.span<{ $color: string }>`
  display: block;
  width: 100%;
  height: 100%;
  background: ${({ $color }) => $color};
`;

export const Label = styled.p`
  margin: ${({ theme }) => theme.spacing[1]} 0 0;
  font-weight: 300;
  font-size: ${({ theme }) => theme.fontSizes.md};
  min-height: ${({ theme }) => theme.fontSizes.lg};
`;
