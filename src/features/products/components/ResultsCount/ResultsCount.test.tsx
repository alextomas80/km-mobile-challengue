import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ThemeProvider } from "styled-components";

import { theme } from "@/styles/theme";
import { ResultsCount } from "./ResultsCount";

function renderWithProviders(ui: React.ReactElement) {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
}

describe("ResultsCount", () => {
  it("uses singular label when count is 1", () => {
    renderWithProviders(<ResultsCount count={1} />);

    expect(screen.getByRole("status")).toHaveTextContent("1 result");
  });

  it("uses plural label when count is 0", () => {
    renderWithProviders(<ResultsCount count={0} />);

    expect(screen.getByRole("status")).toHaveTextContent("0 results");
  });

  it("uses plural label when count is greater than 1", () => {
    renderWithProviders(<ResultsCount count={5} />);

    expect(screen.getByRole("status")).toHaveTextContent("5 results");
  });
});
