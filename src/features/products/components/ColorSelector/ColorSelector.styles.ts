import styled, { css } from "styled-components";

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const Swatch = styled.button<{ $color: string; $selected: boolean }>`
  background: transparent;
  border: 2px solid ${({ theme, $selected }) => ($selected ? theme.colors.text : theme.colors.textMuted)};
  cursor: pointer;
  height: 24px;
  padding: 1px;
  transition: border-color 0.35s ease;
  width: 24px;

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
  background: ${({ $color }) => $color};
  display: block;
  height: 100%;
  width: 100%;
`;

export const Label = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 300;
  margin: ${({ theme }) => theme.spacing[1]} 0 0;
  min-height: ${({ theme }) => theme.fontSizes.lg};
`;
