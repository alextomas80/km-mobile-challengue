import type { Metadata } from "next";

import { Navbar } from "@/components/layout/Navbar";
import { Providers } from "@/styles/Providers";
import { StyledComponentsRegistry } from "@/styles/StyledComponentsRegistry";

import "./globals.css";

export const metadata: Metadata = {
  title: "Phone catalog",
  description: "Browse, compare, and buy mobile phones",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Providers>
            <Navbar />
            {children}
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
