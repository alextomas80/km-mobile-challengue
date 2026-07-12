import "styled-components";
import type { AppTheme } from "./theme";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type -- required shape for declaration merging with styled-components' own DefaultTheme interface
  export interface DefaultTheme extends AppTheme {}
}
