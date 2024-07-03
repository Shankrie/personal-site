import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

createGlobalTheme("body", vars, {
  color: {
    primary: "#0470f3",
    text: "#2b2b2b",
    background: "#ffffff",
    gray100: "#f5f5f5",
    gray200: "#eeeeee",
    gray300: "#e0e0e0",
    gray400: "#bdbdbd",
    gray500: "#9e9e9e",
    gray600: "#757575",
    gray700: "#616161",
  },
});

globalStyle("body", {
  margin: 0,
  minWidth: "320px",
  minHeight: "100vh",
  color: vars.color.text,
  fontFamily: '"Open Sans", sans-serif',
  lineHeight: 1.6,
  fontWeight: 400,
  fontSynthesis: "none",
  textRendering: "optimizeLegibility",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
});

globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle("a", {
  textDecoration: "inherit",
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  margin: 0,
  padding: 0,
  lineHeight: "1em",
});

globalStyle("ul, ol", {
  margin: 0,
  paddingLeft: 0,
  listStyle: "none",
});

globalStyle("button", {
  padding: 0,
  fontSize: "1em",
  fontFamily: "inherit",
  backgroundColor: "transparent",
  border: 0,
  cursor: "pointer",
});

globalStyle("button:focus", {
  outline: "none",
});

globalStyle("button:focus-visible", {
  outline: "2px auto -webkit-focus-ring-color",
});
