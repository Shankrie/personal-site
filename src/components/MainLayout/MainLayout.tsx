import { ReactNode } from "react";
import { containerCss } from "./MainLayout.css";

type Props = {
  children?: ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return <main className={containerCss}>{children}</main>;
};
