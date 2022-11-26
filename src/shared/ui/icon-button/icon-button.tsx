import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";
import st from "./styles.module.scss";

type ButtonSizes = "small" | "medium" | "large";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSizes;
}

export const IconButton = (props: IconButtonProps) => {
  return (
    <button
      {...props}
      className={classNames(
        st.icon_button,
        props.className ? props.className : "",
        {
          [st.small]: props.size === "small",
          [st.medium]: props.size === "medium" || !props.size,
          [st.large]: props.size === "large",
        }
      )}
    >
      {props.children}
    </button>
  );
};
