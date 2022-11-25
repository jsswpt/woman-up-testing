import React from "react";
import { Logo } from "shared/assets/svg/media/logo";
import { SidebarBlockLayout } from "shared/ui/sidebar-block-layout/sidebar-block-layout";
import st from "./styles.module.scss";

const Sidebar = () => {
  return (
    <div className={st.sidebar}>
      <div className={st.sidebar_top}>
        <Logo />
      </div>
      <div className={st.sidebar_middle}>
        <SidebarBlockLayout title="Категории"></SidebarBlockLayout>
        <SidebarBlockLayout title="???"></SidebarBlockLayout>
        <SidebarBlockLayout title="???"></SidebarBlockLayout>
        <SidebarBlockLayout title="???"></SidebarBlockLayout>
      </div>
    </div>
  );
};

export default Sidebar;
