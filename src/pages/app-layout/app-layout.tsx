import { AppModal } from "entities/modal";
import React, { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "shared/ui/loader/loader";

import st from "./styles.module.scss";

const Sidebar = React.lazy(() => import("widgets/sidebar/sidebar"));
const Header = React.lazy(() => import("widgets/header/header"));

const AppLayout = () => {
  return (
    <>
      <AppModal />
      <div className={st.layout}>
        <Suspense>
          <Sidebar />
        </Suspense>
        <div className={st.app_wrap}>
          <Suspense>
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

export default AppLayout;
