import { style } from "@vanilla-extract/css";

export const containerCss = style({
  "@media": {
    print: {
      display: "none",
    },
  },
});
