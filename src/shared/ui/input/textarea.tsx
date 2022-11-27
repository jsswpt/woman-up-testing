import classNames from "classnames";
import { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = (props: TextareaProps) => {
  return (
    <textarea
      {...props}
      className={classNames(props.className ? props.className : "")}
    >
      {props.children}
    </textarea>
  );
};
