import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import { routePaths } from "shared/api/internal/consts/route-paths";

import st from "./styles.module.scss";

const SignUpFeature = React.lazy(
  () => import("feature/sign-up-feature/ui/sign-up-feature")
);

const SignUpPage = () => {
  return (
    <div className={st.page_wrap}>
      <div className={st.text_wrap}>
        <p className={st.title}>
          Создайте аккаунт, чтобы начать планирование задач
        </p>
      </div>
      <div className={st.inner_wrap}>
        <Suspense>
          <SignUpFeature />
        </Suspense>
      </div>
      <div className={st.extra_wrap}>
        <p className={st.extra_text}>
          Уже есть аккаунт?{" "}
          <Link to={routePaths.publicNavigation.SIGN_IN} className={st.link}>
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
