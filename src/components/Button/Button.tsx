import { ReactNode } from "react";
import { containerCss } from "./Button.css";

type Props = {
  children?: ReactNode;
  onClick?: () => void;
};

export const Button = ({ children, onClick }: Props) => {
  return (
    <button className={containerCss} onClick={onClick}>
      {children}
    </button>
  );
};
