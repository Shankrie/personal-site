import { ReactNode } from "react";
import { itemCss } from "./TimeLine.css";

type Props = {
  items: ReactNode[];
};

export const TimeLine = ({ items }: Props) => {
  return (
    <div>
      {items.map((node, index) => (
        <div className={items.length > 1 ? itemCss : undefined} key={index}>
          {node}
        </div>
      ))}
    </div>
  );
};
