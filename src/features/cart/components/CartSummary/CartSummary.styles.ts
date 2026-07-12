import styled from "styled-components";

export const Wrapper = styled.div`
  align-items: baseline;
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 400;
  gap: ${({ theme }) => theme.spacing[1]};
  margin-right: 80px;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: space-between;
    margin-right: 0;
  }
`;

export const Label = styled.span`
  margin-right: ${({ theme }) => theme.spacing[3]};
  transition: all 0.3s ease-in-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-right: 0;
  }
`;
