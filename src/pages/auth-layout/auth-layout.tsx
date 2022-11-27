import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Logo } from "shared/assets/svg/media/logo";
import { Container } from "shared/ui/container/container";
import st from "./styles.module.scss";

const AuthLayout = () => {
  return (
    <div className={st.auth_layout}>
      <Container className={st.auth_container}>
        <div className={st.logo_wrap}>
          <Logo className={st.logo} />
        </div>
        <div className={st.page_wrap}>
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      </Container>
    </div>
  );
};

export default AuthLayout;
