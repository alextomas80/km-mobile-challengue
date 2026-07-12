export const theme = {
  colors: {
    primary: "#000000",
    background: "#f7f8fa",
    surface: "#ffffff",
    text: "#000000",
    textMuted: "#ccc",
    border: "#000000",
    buttonPrimary: "#1B1A18",
    buttonDisabled: "#F3F2F2",
    danger: "#E1352C",
  },
  fontSizes: {
    xs: "10px",
    sm: "12px",
    md: "14px",
    lg: "16px",
    xl: "20px",
    xxl: "24px",
  },
  spacing: {
    0.5: "4px",
    1: "8px",
    1.5: "12px",
    2: "16px",
    2.5: "20px",
    3: "24px",
    4: "32px",
    5: "40px",
    6: "48px",
    8: "64px",
  } as Record<number, string>,
  breakpoints: {
    sm: "480px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
  font: {
    family: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  },
} as const;

export type AppTheme = typeof theme;
