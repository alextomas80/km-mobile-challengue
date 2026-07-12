import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { CartSummary } from "./CartSummary";
import { theme } from "@/styles/theme";

function renderWithProviders(ui: React.ReactElement) {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
}

describe("CartSummary", () => {
  it("renders the total label", () => {
    renderWithProviders(<CartSummary total={100} />);

    expect(screen.getByText("Total")).toBeInTheDocument();
  });

  it("formats the total price", () => {
    renderWithProviders(<CartSummary total={1234} />);

    expect(screen.getByText("1234 EUR")).toBeInTheDocument();
  });

  it("formats zero total", () => {
    renderWithProviders(<CartSummary total={0} />);

    expect(screen.getByText("0 EUR")).toBeInTheDocument();
  });
});
