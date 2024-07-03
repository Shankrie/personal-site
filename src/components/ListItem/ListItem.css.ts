import { style } from "@vanilla-extract/css";

export const listItemCss = style({
  ":before": {
    content: "-",
    marginRight: "8px",
  },
});
