import { style } from "@vanilla-extract/css";
import { vars } from "@style/theme.css";

export const dividerCss = style({
  margin: "32px 0",
  border: "none",
  borderTop: `1px solid ${vars.color.gray200}`,
});
