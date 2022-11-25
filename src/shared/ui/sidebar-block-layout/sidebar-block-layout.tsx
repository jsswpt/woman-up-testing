import { HTMLAttributes } from "react";

interface SidebarBlockLayoutProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

export const SidebarBlockLayout = (props: SidebarBlockLayoutProps) => {
  return (
    <div>
      <div>{props.title}</div>
      <div>{props.children}</div>
    </div>
  );
};
