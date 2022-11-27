import classNames from "classnames";
import { InputHTMLAttributes } from "react";
import st from "./styles.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: "small" | "medium" | "large";
  variant?: "outlined" | "inherit";

  fullwidth?: boolean;
}

export const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      className={classNames(st.input, {
        [st.small]: props.inputSize === "small",
        [st.medium]: props.inputSize === "medium" || !props.inputSize,
        [st.large]: props.inputSize === "large",

        [st.outlined]: props.variant === "outlined",
        [st.inherit]: props.variant === "inherit" || !props.variant,

        [st.fullwidth]: props.fullwidth,
      })}
    />
  );
};
