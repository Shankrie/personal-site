import { keyframes, style } from "@vanilla-extract/css";

const popupBackgroundColor = "rgba(0, 0, 0, 0.9)";

const fadeOut = keyframes({
  "0%": { opacity: 1 },
  "80%": { opacity: 1 },
  "100%": { opacity: 0 },
});

export const linkButtonCss = style({
  position: "relative",
  padding: "3px",
  lineHeight: 0,
  transition: "0.1s all",
});

export const popupDurationInMilliseconds = 2000;

export const chevronSize = "4px";

export const popupCss = style({
  position: "absolute",
  bottom: `calc(100% + ${chevronSize})`,
  left: "50%",
  flex: "none",
  padding: "7px 10px",
  color: "white",
  fontSize: "12px",
  fontWeight: "600",
  lineHeight: "normal",
  whiteSpace: "nowrap",
  backgroundColor: popupBackgroundColor,
  borderRadius: "6px",
  transform: "translateX(-50%)",
  animation: `${fadeOut} ${popupDurationInMilliseconds}ms forwards`,

  ":before": {
    position: "absolute",
    content: "",
    bottom: `calc((${chevronSize} - 1px) * -1)`,
    left: "50%",
    width: "0",
    height: "0",
    borderLeft: "6px solid transparent",
    borderRight: "6px solid transparent",
    borderTop: `${chevronSize} solid ${popupBackgroundColor}`,
    transform: "translateX(-50%)",
  },
});
