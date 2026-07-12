"use client";

import Link from "next/link";
import styled from "styled-components";

import { baseButtonStyles, variantStyles } from "@/components/ui/Button";

export const LinkButton = styled(Link)`
  ${baseButtonStyles}
  ${variantStyles.secondary}
  text-decoration: none;
  text-transform: uppercase;
`;
