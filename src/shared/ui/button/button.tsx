import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";

import st from "./styles.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className={classNames(
        st.button,
        props.className ? props.className : "",
        {}
      )}
    >
      {props.children}
    </button>
  );
};
