import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Section = ({ children }: Props) => {
  return <section>{children}</section>;
};
