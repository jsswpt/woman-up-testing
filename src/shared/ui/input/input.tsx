import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: "small" | "medium" | "large";
}

export const Input = (props: InputProps) => {
  return <input {...props} />;
};
