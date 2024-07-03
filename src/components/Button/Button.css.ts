import { style } from "@vanilla-extract/css";
import { vars } from "@style/theme.css";

export const containerCss = style({
  padding: "6px 8px",
  border: `1px solid ${vars.color.gray400}`,
  borderRadius: "6px",
  transition: "150ms all",

  ":hover": {
    borderColor: vars.color.gray600,
    boxShadow: "0px 0px 2px 1px rgba(0,0,0,0.1)",
  },
});
