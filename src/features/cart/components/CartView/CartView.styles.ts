import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: ${({ theme }) => theme.spacing[4]};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: 300;
  margin: 0 0 ${({ theme }) => theme.spacing[4]};
  text-transform: uppercase;
`;

export const Footer = styled.div`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
  margin-top: ${({ theme }) => theme.spacing[6]};
  padding-top: ${({ theme }) => theme.spacing[3]};

  > *:nth-child(2) {
    margin-left: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    align-items: stretch;
    flex-wrap: wrap;
    transition: all 0.3s ease-in-out;

    > *:nth-child(1) {
      flex: 1;
      min-width: 0;
      order: 2;
    }

    > *:nth-child(2) {
      flex: 1 1 100%;
      margin-left: 0;
      order: 1;
    }

    > *:nth-child(3) {
      flex: 1;
      min-width: 0;
      order: 3;
    }
  }
`;
