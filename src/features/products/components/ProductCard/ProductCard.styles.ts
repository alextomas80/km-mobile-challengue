import Link from "next/link";
import styled from "styled-components";

import { Price } from "@/components/ui/Price";

export const Card = styled(Link)`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  margin: -1px 0 0 -1px;
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing[2]};
  position: relative;
  transition:
    box-shadow 0.15s ease,
    transform 0.15s ease;

  &::before {
    background: ${({ theme }) => theme.colors.border};
    content: "";
    height: 0%;
    inset: auto 0 0 0;
    opacity: 0;
    position: absolute;
    transition:
      height 0.2s ease,
      opacity 0.35s ease;
    z-index: 0;
  }

  &:hover::before {
    height: 100%;
    opacity: 1;
    transition:
      height 0.5s ease,
      opacity 0.5s ease;
  }
`;

export const ImageWrapper = styled.div`
  aspect-ratio: 1 / 1;
  margin-bottom: ${({ theme }) => theme.spacing[1]};
  max-height: 257px;
  padding: ${({ theme }) => theme.spacing[2]};
  position: relative;
  width: 100%;
  z-index: 1;
 }
`;

export const Body = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing[0.5]};
  justify-content: space-between;
  position: relative;
`;

export const BodyContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[0.5]};
`;

export const Brand = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-transform: uppercase;
  transition: color 0.3s ease;

  ${Card}:hover & {
    color: #fff;
  }
`;

export const Name = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 300;
  text-transform: uppercase;
  transition: color 0.3s ease;

  ${Card}:hover & {
    color: #fff;
  }
`;

export const StyledPrice = styled(Price)`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 300 !important;
  transition: color 0.3s ease;

  ${Card}:hover & {
    color: #fff;
  }
`;
