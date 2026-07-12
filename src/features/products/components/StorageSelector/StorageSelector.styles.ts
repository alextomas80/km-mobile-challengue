import styled from "styled-components";

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Pill = styled.button<{ $selected: boolean }>`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme, $selected }) => ($selected ? theme.colors.text : theme.colors.textMuted)};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 300;
  height: 65px;
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[2]}`};
  width: 95px;
  transition:
    border-color 0.3s ease,
    color 0.3s ease,
    background-color 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.text};
  }

  &:disabled {
    border-color: ${({ theme }) => theme.colors.textMuted};
    color: ${({ theme }) => theme.colors.textMuted};
    cursor: not-allowed;
  }
`;
