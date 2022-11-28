import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import { routePaths } from "shared/api/internal/consts/route-paths";
import st from "./styles.module.scss";

const SignInFeature = React.lazy(
  () => import("feature/sign-in-feature/ui/sign-in-feature")
);

const SignInPage = () => {
  return (
    <div className={st.page_wrap}>
      <div className={st.text_wrap}>
        <p className={st.title}>
          Вход в аккаунт не реализован. Просто создай новый
        </p>
      </div>
      <div className={st.inner_wrap}>
        <Suspense>
          <SignInFeature />
        </Suspense>
      </div>
      <div className={st.extra_wrap}>
        <p className={st.extra_text}>
          Ещё нет аккаунта?{" "}
          <Link to={routePaths.publicNavigation.SIGN_UP} className={st.link}>
            Регистрация
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
