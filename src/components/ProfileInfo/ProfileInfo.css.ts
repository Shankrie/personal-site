import { screenSizeQueries } from "@style/mediaQueries";
import { style } from "@vanilla-extract/css";

export const containerCss = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "24px",

  "@media": {
    [screenSizeQueries.mobile]: {
      flexDirection: "column",
      alignItems: "start",
      gap: "16px",
    },
  },
});

export const imageContainerCss = style({
  flex: "none",
  width: "120px",
  height: "120px",
  borderRadius: "50%",
  overflow: "hidden",

  "@media": {
    [screenSizeQueries.mobile]: {
      width: "80px",
      height: "80px",
    },
  },
});

export const imageCss = style({
  height: "100%",
});

export const infoContainerCss = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const locationCss = style({
  display: "flex",
  alignItems: "center",
  gap: "6px",
});
