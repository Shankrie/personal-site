import { ReactNode } from "react";
import { listItemCss } from "./ListItem.css";

type Props = {
  children: ReactNode;
};

export const ListItem = ({ children }: Props) => {
  return <li className={listItemCss}>{children}</li>;
};
