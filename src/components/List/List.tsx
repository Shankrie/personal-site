import { ReactNode } from "react";
import { listCss } from "./List.css";

type Props = {
  children: ReactNode;
  ordered?: boolean;
};

export const List = ({ children, ordered }: Props) => {
  if (ordered) {
    return <ol className={listCss}>{children}</ol>;
  }

  return <ul className={listCss}>{children}</ul>;
};
