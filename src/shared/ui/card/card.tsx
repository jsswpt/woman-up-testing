import { HTMLAttributes } from "react";
import classNames from "classnames";

import st from "./styles.module.scss";

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export const Card = (props: CardProps) => {
  return (
    <div
      {...props}
      className={classNames(st.card, props.className ? props.className : "")}
    >
      {props.children}
    </div>
  );
};
