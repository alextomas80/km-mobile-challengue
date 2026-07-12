import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { ContinueShoppingButton } from "./ContinueShoppingButton";
import { theme } from "@/styles/theme";

function renderWithProviders(ui: React.ReactElement) {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
}

describe("ContinueShoppingButton", () => {
  it("renders a link with the expected label", () => {
    renderWithProviders(<ContinueShoppingButton />);

    expect(screen.getByRole("link", { name: "Continue shopping" })).toBeInTheDocument();
  });

  it("links to the home page", () => {
    renderWithProviders(<ContinueShoppingButton />);

    expect(screen.getByRole("link", { name: "Continue shopping" })).toHaveAttribute("href", "/");
  });
});
