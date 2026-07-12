import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { ThemeProvider } from "styled-components";

import { theme } from "@/styles/theme";
import { SearchBar } from "./SearchBar";

function renderWithProviders(ui: React.ReactElement) {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
}

describe("SearchBar", () => {
  it("renders the current value", () => {
    renderWithProviders(<SearchBar value="iphone" onChange={vi.fn()} />);
    expect(screen.getByRole("searchbox", { name: /search for a smartphone/i })).toHaveValue("iphone");
  });

  it("calls onChange with the new value when typing", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    renderWithProviders(<SearchBar value="" onChange={onChange} />);

    await user.type(screen.getByRole("searchbox"), "alex");

    expect(onChange).toHaveBeenCalledTimes(4);
    expect(onChange).toHaveBeenNthCalledWith(1, "a");
    expect(onChange).toHaveBeenNthCalledWith(2, "l");
    expect(onChange).toHaveBeenNthCalledWith(3, "e");
    expect(onChange).toHaveBeenNthCalledWith(4, "x");
  });
});
