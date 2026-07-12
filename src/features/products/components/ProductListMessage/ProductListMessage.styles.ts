import styled from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.textMuted};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[6]} 0;
  text-align: center;
`;
