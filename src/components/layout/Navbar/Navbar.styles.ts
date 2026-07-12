"use client";

import Link from "next/link";
import styled from "styled-components";

export const Header = styled.header`
  align-items: center;
  background: ${({ theme }) => theme.colors.surface};
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[3]}`};
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const HeaderContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1720px;
  width: 100%;
`;

export const IconLink = styled(Link)`
  align-items: center;
  display: flex;
  justify-content: center;
`;
