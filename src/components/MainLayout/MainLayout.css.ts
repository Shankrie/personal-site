import { vars } from "@style/theme.css";
import { style } from "@vanilla-extract/css";

export const containerCss = style({
  minHeight: "100vh",
  padding: "40px 0 120px",
  backgroundColor: vars.color.background,

  "@media": {
    print: {
      padding: 0,
    },
  },
});
