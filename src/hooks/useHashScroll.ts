import { useEffect } from "react";

export const useHashScroll = () => {
  useEffect(() => {
    if (!location.hash) return;

    document.getElementById(location.hash.slice(1))?.scrollIntoView();
  }, []);
};
