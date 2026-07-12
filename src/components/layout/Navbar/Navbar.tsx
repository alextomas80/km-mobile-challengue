"use client";

import Image from "next/image";

import { CartBadge } from "../CartBadge";
import { Header, HeaderContent, IconLink } from "./Navbar.styles";

export function Navbar() {
  return (
    <Header>
      <HeaderContent>
        <IconLink href="/" aria-label="Go to home">
          <Image src="/images/logo.svg" alt="Application logo" width={74} height={24} priority />
        </IconLink>

        <IconLink href="/cart" aria-label="View shopping cart">
          <Image src="/images/bag-icon.svg" alt="Shopping cart icon" width={18} height={18} />
          <CartBadge />
        </IconLink>
      </HeaderContent>
    </Header>
  );
}
