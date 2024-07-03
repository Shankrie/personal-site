import { createThemeContract } from "@vanilla-extract/css";
import { themeTokens } from "./themeTokens";

export const vars = createThemeContract(themeTokens);
