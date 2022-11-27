import classNames from "classnames";
import { Link, LinkProps } from "react-router-dom";

import st from "./styles.module.scss";

interface ButtonLink extends LinkProps {
  size?: "small" | "medium" | "large";
  variant?: "contained" | "outlined" | "inherit";
  color?: "primary" | "success" | "danger" | "warning" | "inherit";
  fullwidth?: boolean;
}

export const ButtonLink = (props: ButtonLink) => {
  return (
    <Link
      {...props}
      className={classNames(
        st.button,
        st.button_link,
        props.className ? props.className : "",
        {
          [st.small]: props.size === "small",
          [st.medium]: props.size === "medium" || !props.size,
          [st.large]: props.size === "large",

          [st.contained]: props.variant === "contained",
          [st.outlined]: props.variant === "outlined",
          [st.inherit]: props.variant === "inherit" || !props.variant,

          [st.button_inherit]: props.variant === "inherit" || !props.variant,

          [st.fullwidth]: props.fullwidth,
          [st.contained_button]: props.variant === "contained",

          [st.primary_bg]:
            props.variant === "contained" && props.color === "primary",
          [st.success_bg]:
            props.variant === "contained" && props.color === "success",
          [st.danger_bg]:
            props.variant === "contained" && props.color === "danger",
          [st.warning_bg]:
            props.variant === "contained" && props.color === "warning",

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
        }
      )}
    >
      {props.children}
    </Link>
  );
};
