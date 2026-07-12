import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { ProductGridSkeleton } from "./ProductGridSkeleton";
import { theme } from "@/styles/theme";

function renderWithProviders(ui: React.ReactElement) {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
}

describe("ProductGridSkeleton", () => {
  it("renders 10 skeleton cards by default", () => {
    const { container } = renderWithProviders(<ProductGridSkeleton />);

    expect(container.firstElementChild?.children).toHaveLength(10);
  });

  it("renders the given number of skeleton cards", () => {
    const { container } = renderWithProviders(<ProductGridSkeleton count={4} />);

    expect(container.firstElementChild?.children).toHaveLength(4);
  });

  it("renders zero skeleton cards when count is 0", () => {
    const { container } = renderWithProviders(<ProductGridSkeleton count={0} />);

    expect(container.firstElementChild?.children).toHaveLength(0);
  });

  it("hides the grid from assistive technology", () => {
    const { container } = renderWithProviders(<ProductGridSkeleton />);

    expect(container.firstElementChild).toHaveAttribute("aria-hidden", "true");
  });
});
