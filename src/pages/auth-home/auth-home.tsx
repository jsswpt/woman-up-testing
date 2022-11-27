import React from "react";
import { routePaths } from "shared/api/internal/consts/route-paths";
import { ButtonLink } from "shared/ui/button/button-link";

import st from "./styles.module.scss";

const AuthHome = () => {
  return (
    <div className={st.auth_wrap}>
      <p className={st.title}>
        Тестовое задание для WomanUP. Для старта зарегистрируйтесь
      </p>
      <div className={st.buttons_wrap}>
        <ButtonLink to={routePaths.publicNavigation.SIGN_IN} fullwidth>
          Войти
        </ButtonLink>
        <ButtonLink to={routePaths.publicNavigation.SIGN_UP} fullwidth>
          Регистрация
        </ButtonLink>
      </div>
    </div>
  );
};

export default AuthHome;
