"use client";

import styled from "styled-components";

export const Section = styled.section`
  --container-max: 1200px;
  --container-padding: ${({ theme }) => theme.spacing[2]};
  --container-border: 1px;
  --inset: calc((100vw - min(100vw, var(--container-max))) / 2 + var(--container-padding) + var(--container-border));

  position: relative;
  left: 50%;
  width: 100vw;
  transform: translateX(-50%);
  margin-top: ${({ theme }) => theme.spacing[4]};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    --container-border: 3px;
    margin-top: 154px;
  }
`;

export const Heading = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 300;
  letter-spacing: 0.05em;
  margin: 0 0 ${({ theme }) => theme.spacing[5]};
  text-transform: uppercase;
  padding-left: var(--inset);
`;

export const Scroller = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 1px ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[2]} var(--inset);
  scroll-padding-left: var(--inset);
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled.div`
  flex: 0 0 361px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex: 0 0 377px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex: 0 0 344px;
  }
`;
