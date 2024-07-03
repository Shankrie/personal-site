import { style } from "@vanilla-extract/css";

export const headerCss = style({
  display: "flex",
  gap: "16px",
  alignItems: "center",
});

export const logoCss = style({
  flex: "none",
  width: "56px",
  height: "56px",
  overflow: "hidden",
  borderRadius: "4px",
  boxShadow: "0px 0px 3px 0px rgba(0,0,0,0.2)",
});

export const logoImageCss = style({
  height: "100%",
});

export const descriptionCss = style({
  marginTop: "16px",
});
