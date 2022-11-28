import { useStore } from "effector-react";
import { getCategoriesFx } from "entities/categories";
import { AppModal } from "entities/modal";
import { $session } from "entities/session";
import React, { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "shared/ui/loader/loader";

import st from "./styles.module.scss";

const CategoriesList = React.lazy(
  () => import("widgets/categories-list/categories-list")
);

const Sidebar = React.lazy(() => import("widgets/sidebar/sidebar"));
const Header = React.lazy(() => import("widgets/header/header"));

const AppLayout = () => {
  const session = useStore($session);
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
      </div>
    </>
  );
};

export default AppLayout;
