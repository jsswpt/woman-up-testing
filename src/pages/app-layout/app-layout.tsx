import { AppModal } from "entities/modal";
import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "shared/ui/loader/loader";
import Header from "widgets/header/header";

import st from "./styles.module.scss";

const Sidebar = React.lazy(() => import("widgets/sidebar/sidebar"));

export const AppLayout = () => {
  return (
    <>
      <AppModal />
      <div className={st.layout}>
        <Suspense>
          <Sidebar />
        </Suspense>
        <div className={st.app_wrap}>
          <Suspense fallback={<Loader />}>
            <Header />
          </Suspense>
          <main className={st.main}>
            <Suspense fallback={<>Loading page...</>}>
              <Outlet />
            </Suspense>
          </main>
        </div>
      </div>
    </>
  );
};
