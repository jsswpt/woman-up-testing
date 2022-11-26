import React, { Suspense } from "react";
import classNames from "classnames";
import { Logo } from "shared/assets/svg/media/logo";
import { useScreen } from "shared/lib/useScreen";
import { SidebarBlockLayout } from "shared/ui/sidebar-block-layout/sidebar-block-layout";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import st from "./styles.module.scss";
import { useAnimation } from "shared/lib/useAnimation";
import { IconButton } from "shared/ui/icon-button/icon-button";
import { Link } from "react-router-dom";
import { routePaths } from "shared/api/internal/consts/route-paths";

const SidebarCategoriesList = React.lazy(
  () =>
    import(
      "entities/categories/ui/sidebar-categories-list/sidebar-categories-list"
    )
);

const Sidebar = () => {
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
            <Link to={routePaths.publicNavigation.HOME}>
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
            <Suspense>
              <SidebarCategoriesList />
            </Suspense>
          </SidebarBlockLayout>
          <SidebarBlockLayout title="Условный блок"></SidebarBlockLayout>
          <SidebarBlockLayout title="Ещё условный блок">
            условный блок
          </SidebarBlockLayout>
          <SidebarBlockLayout title="Ещё условный блок">
            условный блок
          </SidebarBlockLayout>
          <SidebarBlockLayout title="Категории">категории</SidebarBlockLayout>
          <SidebarBlockLayout title="Условный блок">
            лист категорий
          </SidebarBlockLayout>
          <SidebarBlockLayout title="Ещё условный блок">
            условный блок
          </SidebarBlockLayout>
          <SidebarBlockLayout title="Ещё условный блок">
            условный блок
          </SidebarBlockLayout>
          <SidebarBlockLayout title="Категории">категории</SidebarBlockLayout>
          <SidebarBlockLayout title="Условный блок">
            лист категорий
          </SidebarBlockLayout>
          <SidebarBlockLayout title="Ещё условный блок">
            условный блок
          </SidebarBlockLayout>
          <SidebarBlockLayout title="Ещё условный блок">
            условный блок
          </SidebarBlockLayout>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
