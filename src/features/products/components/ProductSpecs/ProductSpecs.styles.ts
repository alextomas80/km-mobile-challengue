import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 80px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: 154px;
  }
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 300;
  letter-spacing: 0.05em;
  margin: 0 0 ${({ theme }) => theme.spacing[5]};
  text-transform: uppercase;
`;

export const List = styled.dl`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  margin: 0;
`;

export const Row = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[2]} 0;
`;

export const Term = styled.dt`
  color: ${({ theme }) => theme.colors.text};
  flex: 0 0 300px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 300;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex: 0 0 150px;
  }
`;

export const Description = styled.dd`
  color: ${({ theme }) => theme.colors.text};
  flex: 1;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 300;
  margin: 0;
`;
