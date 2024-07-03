import { ReactNode } from "react";
import { containerCss } from "./ContentLayout.css";

type Props = {
  children?: ReactNode;
};

export const ContentLayout = ({ children }: Props) => {
  return <div className={containerCss}>{children}</div>;
};
