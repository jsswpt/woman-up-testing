import classNames from "classnames";
import { HTMLAttributes } from "react";
import st from "./styles.module.scss";

export const Container = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={classNames(st.container, props.className)}>
      {props.children}
    </div>
  );
};
