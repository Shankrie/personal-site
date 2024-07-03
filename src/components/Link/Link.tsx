import { ReactNode } from "react";
import { linkCss } from "./Link.css";

type Props = {
  children: ReactNode;
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
};

export const Link = ({ children, href, target, rel }: Props) => {
  return (
    <a className={linkCss} href={href} target={target} rel={rel}>
      {children}
    </a>
  );
};
