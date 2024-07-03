import { style } from "@vanilla-extract/css";
import { vars } from "@style/theme.css";
import { screenSizeQueries } from "@style/mediaQueries";

const border = `1px solid ${vars.color.gray200}`;

export const headerCss = style({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

export const actionLabelCss = style({
  display: "flex",
  gap: "6px",
  alignItems: "center",
});

export const menuContainerCss = style({
  display: "flex",
  gap: "16px",
  justifyContent: "space-between",
  padding: "10px 0",
  borderTop: border,
  borderBottom: border,
});

export const linkMenuContainerCss = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "16px",

  "@media": {
    [screenSizeQueries.mobile]: {
      flexDirection: "column",
      alignItems: "start",
    },
  },
});
