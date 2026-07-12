"use client";

import styled from "styled-components";

export const Layout = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

export const ImageWrapper = styled.div`
  aspect-ratio: 1 / 1;
  max-width: 510px;
  position: relative;
  width: 100%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 362px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 380px;
  }
`;

export const Name = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: 300;
  margin: ${({ theme }) => theme.spacing[5]} 0 0;
  padding: 0;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: 0;
  }
`;

export const Subtitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 300;
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  margin-top: 0;
  text-transform: uppercase;
`;

export const BasePrice = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 300;
  margin: 0;
  margin-bottom: ${({ theme }) => theme.spacing[5]};
  margin-top: ${({ theme }) => theme.spacing[1.5]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: ${({ theme }) => theme.spacing[8]};
  }
`;

export const ColorSelectorWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing[5]};
`;
