import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { theme } from "@/styles/theme";
import { ToolbarSkeleton } from "./ToolbarSkeleton";

function renderWithProviders(ui: React.ReactElement) {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
}

describe("ToolbarSkeleton", () => {
  it("hides the toolbar from assistive technology", () => {
    const { container } = renderWithProviders(<ToolbarSkeleton />);

    expect(container.firstElementChild).toHaveAttribute("aria-hidden", "true");
  });

  it("renders a placeholder for the search bar and results count", () => {
    const { container } = renderWithProviders(<ToolbarSkeleton />);

    expect(container.firstElementChild?.children).toHaveLength(2);
  });
});
