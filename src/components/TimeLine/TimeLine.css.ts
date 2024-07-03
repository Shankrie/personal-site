import { style } from "@vanilla-extract/css";
import { vars } from "@style/theme.css";

const dotSize = "8px";
const dotBorderSize = "5px";
const lineColor = vars.color.gray200;
const topOffset = `calc(28px - (${dotSize} / 2) - ${dotBorderSize})`;
const leftOffset = `calc((${dotBorderSize} / 2) - 2px)`;

export const itemCss = style({
  position: "relative",
  paddingLeft: "20px",

  selectors: {
    "&:not(:last-child)": {
      paddingBottom: "48px",
    },

    "&:not(:last-child):before": {
      content: "",
      position: "absolute",
      top: topOffset,
      left: leftOffset,
      width: "2px",
      height: "100%",
      backgroundColor: lineColor,
    },
  },

  ":after": {
    content: "",
    position: "absolute",
    top: topOffset,
    left: `calc((${dotSize} / -2) - ${dotBorderSize} + 1px + ${leftOffset})`,
    width: dotSize,
    height: dotSize,
    backgroundColor: lineColor,
    border: `${dotBorderSize} solid ${vars.color.background}`,
    borderRadius: "50%",
  },
});
