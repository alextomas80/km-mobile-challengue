import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Helvetica Neue";
    src: url("/fonts/helvetica-neue/HelveticaNeueThin.otf") format("opentype");
    font-weight: 100;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Helvetica Neue";
    src: url("/fonts/helvetica-neue/HelveticaNeueThinItalic.otf") format("opentype");
    font-weight: 100;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: "Helvetica Neue";
    src: url("/fonts/helvetica-neue/HelveticaNeueUltraLight.otf") format("opentype");
    font-weight: 200;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Helvetica Neue";
    src: url("/fonts/helvetica-neue/HelveticaNeueUltraLightItalic.otf") format("opentype");
    font-weight: 200;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: "Helvetica Neue";
    src: url("/fonts/helvetica-neue/HelveticaNeueLight.otf") format("opentype");
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Helvetica Neue";
    src: url("/fonts/helvetica-neue/HelveticaNeueLightItalic.otf") format("opentype");
    font-weight: 300;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: "Helvetica Neue";
    src: url("/fonts/helvetica-neue/HelveticaNeueRoman.otf") format("opentype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Helvetica Neue";
    src: url("/fonts/helvetica-neue/HelveticaNeueItalic.ttf") format("truetype");
    font-weight: 400;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: "Helvetica Neue";
    src: url("/fonts/helvetica-neue/HelveticaNeueMedium.otf") format("opentype");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Helvetica Neue";
    src: url("/fonts/helvetica-neue/HelveticaNeueMediumItalic.otf") format("opentype");
    font-weight: 500;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: "Helvetica Neue";
    src: url("/fonts/helvetica-neue/HelveticaNeueBold.otf") format("opentype");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Helvetica Neue";
    src: url("/fonts/helvetica-neue/HelveticaNeueBoldItalic.otf") format("opentype");
    font-weight: 700;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: "Helvetica Neue";
    src: url("/fonts/helvetica-neue/HelveticaNeueHeavy.otf") format("opentype");
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Helvetica Neue";
    src: url("/fonts/helvetica-neue/HelveticaNeueHeavyItalic.otf") format("opentype");
    font-weight: 800;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: "Helvetica Neue";
    src: url("/fonts/helvetica-neue/HelveticaNeueBlack.otf") format("opentype");
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Helvetica Neue";
    src: url("/fonts/helvetica-neue/HelveticaNeueBlackItalic.otf") format("opentype");
    font-weight: 900;
    font-style: italic;
    font-display: swap;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    padding: 0;
    margin: 0;
  }

  body {
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font.family};
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
  }

  ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;
