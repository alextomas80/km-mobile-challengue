"use client";

import styled from "styled-components";

import { Price } from "@/components/ui/Price";

export const Row = styled.li`
  align-items: center;
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]} 0;

  &:first-child {
    padding-top: 0;
  }
`;

export const ImageWrapper = styled.div`
  aspect-ratio: 1 / 1;
  flex-shrink: 0;
  position: relative;
  width: 200px;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 260px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const Name = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 300;
  text-transform: uppercase;
`;

export const Specs = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 300;
  text-transform: uppercase;
`;

export const Quantity = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-transform: uppercase;
`;

export const StyledPrice = styled(Price)`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 300;
  margin-top: ${({ theme }) => theme.spacing[2.5]};
`;

export const RemoveButton = styled.button`
  align-self: flex-start;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.danger};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-top: ${({ theme }) => `${theme.spacing[8]}`};
  padding: 0;
  text-decoration: none;
  text-transform: uppercase;
`;
