import { useStore } from "effector-react";
import { getCategoriesFx } from "entities/categories";
import { AppModal, setCurrentChild, toggleIsOpen } from "entities/modal";
import { $session } from "entities/session";
import React, { Suspense, useEffect } from "react";
import { MdAdd } from "react-icons/md";
import { Outlet } from "react-router-dom";
import { useScreen } from "shared/lib/useScreen";
import { IconButton } from "shared/ui/button/icon-button";
import { Loader } from "shared/ui/loader/loader";

import st from "./styles.module.scss";

const AddTaskFeature = React.lazy(
  () => import("feature/add-task-feature/ui/add-task-feature")
);
const CategoriesList = React.lazy(
  () => import("widgets/categories-list/categories-list")
);

const Sidebar = React.lazy(() => import("widgets/sidebar/sidebar"));
const Header = React.lazy(() => import("widgets/header/header"));

const AppLayout = () => {
  const session = useStore($session);
  const screen = useScreen();
  useEffect(() => {
    getCategoriesFx(session!.id);
  }, []);
  return (
    <>
      <AppModal />
      <div className={st.layout}>
        <Suspense>
          <Sidebar
            categoriesList={
              <Suspense fallback={<Loader />}>
                <CategoriesList />
              </Suspense>
            }
          />
        </Suspense>
        <div className={st.app_wrap}>
          <Suspense>
            <Header />
          </Suspense>
          <main className={st.main}>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </main>
        </div>
        {screen === "xs" && (
          <IconButton
            className={st.levitate}
            color="primary"
            variant="contained"
            onClick={() => {
              setCurrentChild(
                <Suspense>
                  <AddTaskFeature />
                </Suspense>
              );
              toggleIsOpen(true);
            }}
          >
            <MdAdd />
          </IconButton>
        )}
      </div>
    </>
  );
};

export default AppLayout;
