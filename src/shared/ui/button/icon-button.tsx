import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";
import st from "./styles.module.scss";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
  variant?: "contained" | "outlined" | "inherit";
  color?: "primary" | "success" | "danger" | "warning" | "inherit";
}

export const IconButton = (props: IconButtonProps) => {
  return (
    <button
      {...props}
      className={classNames(
        st.icon_button,
        props.className ? props.className : "",
        {
          [st.icon_button_small]: props.size === "small",
          [st.icon_button_medium]: props.size === "medium" || !props.size,
          [st.icon_button_large]: props.size === "large",

          [st.contained]: props.variant === "contained",
          [st.outlined]: props.variant === "outlined",
          [st.inherit]: props.variant === "inherit" || !props.variant,

          [st.primary_bg]:
            props.variant === "contained" && props.color === "primary",
          [st.success_bg]:
            props.variant === "contained" && props.color === "success",
          [st.danger_bg]:
            props.variant === "contained" && props.color === "danger",
          [st.warning_bg]:
            props.variant === "contained" && props.color === "warning",
          [st.inherit_bg]:
            props.variant === "contained" &&
            (props.color === "inherit" || !props.color),

          [st.primary_color]:
            props.variant !== "contained" && props.color === "primary",
          [st.success_color]:
            props.variant !== "contained" && props.color === "success",
          [st.danger_color]:
            props.variant !== "contained" && props.color === "danger",
          [st.warning_color]:
            props.variant !== "contained" && props.color === "warning",
          [st.inherit_color]:
            props.variant !== "contained" &&
            (props.color === "inherit" || !props.color),

          [st.primary_border]:
            props.variant === "outlined" && props.color === "primary",
          [st.success_border]:
            props.variant === "outlined" && props.color === "success",
          [st.danger_border]:
            props.variant === "outlined" && props.color === "danger",
          [st.warning_border]:
            props.variant === "outlined" && props.color === "warning",
          [st.inherit_border]:
            props.variant === "outlined" &&
            (props.color === "inherit" || !props.color),
        }
      )}
    >
      {props.children}
    </button>
  );
};
