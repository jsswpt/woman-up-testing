import { AuthFormLayout } from "entities/session";
import React from "react";
import { routePaths } from "shared/api/internal/consts/route-paths";
import { Button } from "shared/ui/button/button";
import { ButtonLink } from "shared/ui/button/button-link";
import { Input } from "shared/ui/input/input";

const SignInFeature = () => {
  return (
    <form>
      <AuthFormLayout
        inputs={
          <>
            <Input type="email" placeholder="Адрес эл. почты" autoFocus />
            <Input type="password" placeholder="Пароль" />
          </>
        }
        buttons={
          <>
            <Button color="primary" variant="contained">
              Войти
            </Button>
            <ButtonLink to={routePaths.publicNavigation.HOME}>Назад</ButtonLink>
          </>
        }
      />
    </form>
  );
};

export default SignInFeature;
