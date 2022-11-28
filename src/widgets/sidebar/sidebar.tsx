import React, { Suspense } from "react";
import classNames from "classnames";
import { Logo } from "shared/assets/svg/media/logo";
import { useScreen } from "shared/lib/useScreen";
import { SidebarBlockLayout } from "shared/ui/sidebar-block-layout/sidebar-block-layout";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import st from "./styles.module.scss";
import { useAnimation } from "shared/lib/useAnimation";
import { IconButton } from "shared/ui/button/icon-button";
import { Link } from "react-router-dom";
import { routePaths } from "shared/api/internal/consts/route-paths";
import { Button } from "shared/ui/button/button";
import { setCurrentChild, toggleIsOpen } from "entities/modal";
import { AddCategoryFeature } from "feature/add-category-feature/ui/add-category-feature";

type SidebarProps = {
  categoriesList: React.ReactNode;
};

const Sidebar = (props: SidebarProps) => {
  const screen = useScreen();
  const state = useAnimation(screen === "lg", 750);

  return (
    <>
      {screen !== "lg" && (
        <button
          onClick={() => state.toggleAnimation(true)}
          className={classNames(st.open_button)}
        >
          <MdKeyboardArrowRight size={32} />
        </button>
      )}
      <div
        className={classNames(st.sidebar, {
          [st.closing]: state.isInTransition && state.isOpen,
          [st.opening]: state.isInTransition && !state.isOpen,
          [st.closed]:
            !state.isInTransition && !state.isOpen && screen !== "lg",
          [st.opened]: !state.isInTransition && state.isOpen,
        })}
      >
        <div className={st.sidebar_top}>
          <div className={st.logo_wrap}>
            <Link to={routePaths.privateNavigation.HOME}>
              <Logo />
            </Link>
          </div>
          {screen !== "lg" && (
            <IconButton onClick={() => state.toggleAnimation(false)}>
              <MdKeyboardArrowLeft />
            </IconButton>
          )}
        </div>
        <div className={st.sidebar_middle}>
          <SidebarBlockLayout title="Категории">
            {props.categoriesList}
            <Button
              fullwidth
              size="small"
              color="primary"
              onClick={() => {
                setCurrentChild(<AddCategoryFeature />);
                toggleIsOpen(true);
              }}
            >
              Новая
            </Button>
          </SidebarBlockLayout>
          <SidebarBlockLayout title="Условный блок"></SidebarBlockLayout>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
