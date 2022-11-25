import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "shared/ui/container/container";
import { Loader } from "shared/ui/loader/loader";
import Header from "widgets/header/header";

import st from "./styles.module.scss";

const Sidebar = React.lazy(() => import("widgets/sidebar/sidebar"));

export const AppLayout = () => {
  return (
    <div className={st.layout}>
      <Suspense fallback={<Loader />}>
        <Header />
      </Suspense>
      <main className={st.main}>
        <Suspense fallback={<Loader />}>
          <Sidebar />
        </Suspense>
        <Outlet />
      </main>
    </div>
  );
};
