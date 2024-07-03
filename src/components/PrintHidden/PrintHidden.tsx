import { ReactNode } from "react";
import { containerCss } from "./PrintHidden.css";

type Props = {
  children: ReactNode;
};

export const PrintHidden = ({ children }: Props) => {
  return <span className={containerCss}>{children}</span>;
};
