import Link from "next/link";
import styled from "styled-components";

import { Price } from "@/components/ui/Price";

export const Card = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.surface};
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing[2]};
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin: -1px 0 0 -1px;
  transition:
    box-shadow 0.15s ease,
    transform 0.15s ease;

  &::before {
    content: "";
    position: absolute;
    inset: auto 0 0 0;
    height: 0%;
    opacity: 0;
    background: ${({ theme }) => theme.colors.border};
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
  position: relative;
  z-index: 1;
  width: 100%;
  aspect-ratio: 1 / 1;
  max-height: 257px;
  padding: ${({ theme }) => theme.spacing[2]};
  margin-bottom: ${({ theme }) => theme.spacing[1]};

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
  transition: color 0.3s ease;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 300 !important;

  ${Card}:hover & {
    color: #fff;
  }
`;
