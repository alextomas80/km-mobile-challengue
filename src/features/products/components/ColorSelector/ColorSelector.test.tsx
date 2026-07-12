import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import userEvent from "@testing-library/user-event";

import { ColorSelector } from "./ColorSelector";
import { theme } from "@/styles/theme";
import type { ColorOption } from "@/types/product";

const colorOptions: ColorOption[] = [
  { name: "Midnight", hexCode: "#1a1a1a", imageUrl: "/midnight.png" },
  { name: "Silver", hexCode: "#c0c0c0", imageUrl: "/silver.png" },
  { name: "Gold", hexCode: "#e6c88a", imageUrl: "/gold.png" },
];

function renderWithProviders(ui: React.ReactElement) {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
}

describe("ColorSelector", () => {
  it("renders a radio button for each color option", () => {
    renderWithProviders(<ColorSelector colorOptions={colorOptions} onSelect={vi.fn()} />);

    const radios = screen.getAllByRole("radio");
    expect(radios).toHaveLength(colorOptions.length);
    colorOptions.forEach((color) => {
      expect(screen.getByRole("radio", { name: color.name })).toBeInTheDocument();
    });
  });

  it("exposes the group via role=radiogroup with an accessible name", () => {
    renderWithProviders(<ColorSelector colorOptions={colorOptions} onSelect={vi.fn()} />);

    expect(screen.getByRole("radiogroup", { name: "Select a color option" })).toBeInTheDocument();
  });

  it("marks only the selected color as checked", () => {
    renderWithProviders(<ColorSelector colorOptions={colorOptions} selectedColorName="Silver" onSelect={vi.fn()} />);

    expect(screen.getByRole("radio", { name: "Midnight" })).toHaveAttribute("aria-checked", "false");
    expect(screen.getByRole("radio", { name: "Silver" })).toHaveAttribute("aria-checked", "true");
    expect(screen.getByRole("radio", { name: "Gold" })).toHaveAttribute("aria-checked", "false");
  });

  it("marks all colors unchecked when nothing is selected", () => {
    renderWithProviders(<ColorSelector colorOptions={colorOptions} onSelect={vi.fn()} />);

    screen.getAllByRole("radio").forEach((radio) => {
      expect(radio).toHaveAttribute("aria-checked", "false");
    });
  });

  it("shows the selected color name in the label", () => {
    renderWithProviders(<ColorSelector colorOptions={colorOptions} selectedColorName="Gold" onSelect={vi.fn()} />);

    expect(screen.getByText("Gold")).toBeInTheDocument();
  });

  it("renders an empty label when nothing is selected", () => {
    const { container } = renderWithProviders(<ColorSelector colorOptions={colorOptions} onSelect={vi.fn()} />);

    const label = container.querySelector("p");
    expect(label).toHaveTextContent("");
  });

  it("announces the current selection politely for assistive tech", () => {
    renderWithProviders(<ColorSelector colorOptions={colorOptions} selectedColorName="Gold" onSelect={vi.fn()} />);

    expect(screen.getByText("Gold")).toHaveAttribute("aria-live", "polite");
  });

  it("calls onSelect with the clicked color's name", async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    renderWithProviders(<ColorSelector colorOptions={colorOptions} onSelect={onSelect} />);

    await user.click(screen.getByRole("radio", { name: "Silver" }));

    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(onSelect).toHaveBeenCalledWith("Silver");
  });

  it("only keeps the selected swatch in the tab order (roving tabindex)", () => {
    renderWithProviders(<ColorSelector colorOptions={colorOptions} selectedColorName="Gold" onSelect={vi.fn()} />);

    expect(screen.getByRole("radio", { name: "Midnight" })).toHaveAttribute("tabIndex", "-1");
    expect(screen.getByRole("radio", { name: "Silver" })).toHaveAttribute("tabIndex", "-1");
    expect(screen.getByRole("radio", { name: "Gold" })).toHaveAttribute("tabIndex", "0");
  });

  it("defaults the tab stop to the first swatch when nothing is selected", () => {
    renderWithProviders(<ColorSelector colorOptions={colorOptions} onSelect={vi.fn()} />);

    expect(screen.getByRole("radio", { name: "Midnight" })).toHaveAttribute("tabIndex", "0");
    expect(screen.getByRole("radio", { name: "Silver" })).toHaveAttribute("tabIndex", "-1");
  });

  it("moves focus and selection to the next swatch on ArrowRight", async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    renderWithProviders(<ColorSelector colorOptions={colorOptions} selectedColorName="Midnight" onSelect={onSelect} />);

    screen.getByRole("radio", { name: "Midnight" }).focus();
    await user.keyboard("{ArrowRight}");

    expect(onSelect).toHaveBeenCalledWith("Silver");
    expect(screen.getByRole("radio", { name: "Silver" })).toHaveFocus();
  });

  it("moves focus and selection to the previous swatch on ArrowLeft, wrapping around", async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    renderWithProviders(<ColorSelector colorOptions={colorOptions} selectedColorName="Midnight" onSelect={onSelect} />);

    screen.getByRole("radio", { name: "Midnight" }).focus();
    await user.keyboard("{ArrowLeft}");

    expect(onSelect).toHaveBeenCalledWith("Gold");
    expect(screen.getByRole("radio", { name: "Gold" })).toHaveFocus();
  });

  it("wraps forward from the last swatch to the first on ArrowRight", async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    renderWithProviders(<ColorSelector colorOptions={colorOptions} selectedColorName="Gold" onSelect={onSelect} />);

    screen.getByRole("radio", { name: "Gold" }).focus();
    await user.keyboard("{ArrowRight}");

    expect(onSelect).toHaveBeenCalledWith("Midnight");
    expect(screen.getByRole("radio", { name: "Midnight" })).toHaveFocus();
  });

  it("jumps to the first and last swatch with Home and End", async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    renderWithProviders(<ColorSelector colorOptions={colorOptions} selectedColorName="Silver" onSelect={onSelect} />);

    screen.getByRole("radio", { name: "Silver" }).focus();
    await user.keyboard("{End}");
    expect(onSelect).toHaveBeenLastCalledWith("Gold");

    screen.getByRole("radio", { name: "Gold" }).focus();
    await user.keyboard("{Home}");
    expect(onSelect).toHaveBeenLastCalledWith("Midnight");
  });

  it("renders nothing when there are no color options", () => {
    renderWithProviders(<ColorSelector colorOptions={[]} onSelect={vi.fn()} />);

    expect(screen.queryAllByRole("radio")).toHaveLength(0);
  });
});
