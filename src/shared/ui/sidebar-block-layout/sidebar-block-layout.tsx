import { HTMLAttributes } from "react";
import st from "./styles.module.scss";

interface SidebarBlockLayoutProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

export const SidebarBlockLayout = (props: SidebarBlockLayoutProps) => {
  return (
    <div className={st.sidebar_block}>
      <div className={st.sidebar_block_top}>
        <p className={st.block_title}>{props.title}</p>
      </div>
      {props.children}
    </div>
  );
};
