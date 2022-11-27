import classNames from "classnames";
import { SelectHTMLAttributes } from "react";
import st from "./styles.module.scss";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  selectSize?: "small" | "medium" | "large";
}

export const Select = (props: SelectProps) => {
  return (
    <select
      {...props}
      className={classNames(st.select, props.className ? props.className : "", {
        [st.small]: props.selectSize === "small",
        [st.medium]: props.selectSize === "medium" || !props.selectSize,
        [st.large]: props.selectSize === "large",
      })}
    ></select>
  );
};
