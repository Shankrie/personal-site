import { style } from "@vanilla-extract/css";
import { vars } from "@style/theme.css";

export const linkCss = style({
  color: vars.color.primary,
  fontWeight: 500,

  ":hover": {
    textDecoration: "underline",
  },
});
