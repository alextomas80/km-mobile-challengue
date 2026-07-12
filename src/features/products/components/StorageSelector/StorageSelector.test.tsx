import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { ThemeProvider } from "styled-components";

import type { StorageOption } from "@/types/product";
import { theme } from "@/styles/theme";
import { StorageSelector } from "./StorageSelector";

const storageOptions: StorageOption[] = [
  { capacity: "128GB", price: 799 },
  { capacity: "256GB", price: 899 },
  { capacity: "512GB", price: 1099 },
];

function renderWithProviders(ui: React.ReactElement) {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
}

describe("StorageSelector", () => {
  it("renders a radio button for each storage option", () => {
    renderWithProviders(<StorageSelector storageOptions={storageOptions} onSelect={vi.fn()} />);

    const radios = screen.getAllByRole("radio");
    expect(radios).toHaveLength(storageOptions.length);
    storageOptions.forEach((storage) => {
      expect(screen.getByRole("radio", { name: storage.capacity })).toBeInTheDocument();
    });
  });

  it("exposes the group via role=radiogroup with an accessible name", () => {
    renderWithProviders(<StorageSelector storageOptions={storageOptions} onSelect={vi.fn()} />);

    expect(screen.getByRole("radiogroup", { name: "Select storage" })).toBeInTheDocument();
  });

  it("marks only the selected capacity as checked", () => {
    renderWithProviders(
      <StorageSelector storageOptions={storageOptions} selectedCapacity="256GB" onSelect={vi.fn()} />,
    );

    expect(screen.getByRole("radio", { name: "128GB" })).toHaveAttribute("aria-checked", "false");
    expect(screen.getByRole("radio", { name: "256GB" })).toHaveAttribute("aria-checked", "true");
    expect(screen.getByRole("radio", { name: "512GB" })).toHaveAttribute("aria-checked", "false");
  });

  it("marks all options unchecked when nothing is selected", () => {
    renderWithProviders(<StorageSelector storageOptions={storageOptions} onSelect={vi.fn()} />);

    screen.getAllByRole("radio").forEach((radio) => {
      expect(radio).toHaveAttribute("aria-checked", "false");
    });
  });

  it("calls onSelect with the clicked capacity", async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    renderWithProviders(<StorageSelector storageOptions={storageOptions} onSelect={onSelect} />);

    await user.click(screen.getByRole("radio", { name: "512GB" }));

    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(onSelect).toHaveBeenCalledWith("512GB");
  });

  it("renders nothing when there are no storage options", () => {
    renderWithProviders(<StorageSelector storageOptions={[]} onSelect={vi.fn()} />);

    expect(screen.queryAllByRole("radio")).toHaveLength(0);
  });
});
