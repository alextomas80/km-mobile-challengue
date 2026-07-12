"use client";

import { useMemo, useRef, useState } from "react";
import type { KeyboardEvent } from "react";

import type { ColorOption } from "@/types/product";
import { Label, List, Swatch, SwatchColor } from "./ColorSelector.styles";

export function ColorSelector({
  colorOptions,
  selectedColorName,
  onSelect,
}: {
  colorOptions: ColorOption[];
  selectedColorName?: string;
  onSelect: (colorName: string) => void;
}) {
  const swatchRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [hoveredColorName, setHoveredColorName] = useState<string | undefined>();

  const activeIndex = useMemo(() => {
    const selectedIndex = colorOptions.findIndex((color) => color.name === selectedColorName);
    return selectedIndex >= 0 ? selectedIndex : 0;
  }, [colorOptions, selectedColorName]);

  function focusAndSelect(nextIndex: number) {
    const color = colorOptions[nextIndex];
    if (!color) return;
    swatchRefs.current[nextIndex]?.focus();
    onSelect(color.name);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        event.preventDefault();
        focusAndSelect((index + 1) % colorOptions.length);
        break;
      case "ArrowLeft":
      case "ArrowUp":
        event.preventDefault();
        focusAndSelect((index - 1 + colorOptions.length) % colorOptions.length);
        break;
      case "Home":
        event.preventDefault();
        focusAndSelect(0);
        break;
      case "End":
        event.preventDefault();
        focusAndSelect(colorOptions.length - 1);
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <List role="radiogroup" aria-label="Select a color option">
        {colorOptions.map((color, index) => (
          <Swatch
            key={color.name}
            ref={(node) => {
              swatchRefs.current[index] = node;
            }}
            type="button"
            role="radio"
            tabIndex={index === activeIndex ? 0 : -1}
            aria-checked={color.name === selectedColorName}
            aria-label={color.name}
            title={color.name}
            $color={color.hexCode}
            $selected={color.name === selectedColorName}
            onClick={() => onSelect(color.name)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            onMouseEnter={() => setHoveredColorName(color.name)}
            onMouseLeave={() => setHoveredColorName(undefined)}
            onFocus={() => setHoveredColorName(color.name)}
            onBlur={() => setHoveredColorName(undefined)}
          >
            <SwatchColor $color={color.hexCode} />
          </Swatch>
        ))}
      </List>
      <Label aria-live="polite">{hoveredColorName ?? selectedColorName ?? ""}</Label>
    </div>
  );
}
