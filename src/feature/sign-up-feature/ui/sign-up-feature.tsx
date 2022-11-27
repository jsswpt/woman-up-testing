import { useStore } from "effector-react";
import { AuthFormLayout } from "entities/session";
import React from "react";
import { routePaths } from "shared/api/internal/consts/route-paths";
import { Button } from "shared/ui/button/button";
import { ButtonLink } from "shared/ui/button/button-link";
import { Input } from "shared/ui/input/input";
import { Loader } from "shared/ui/loader/loader";

import {
  setEmail,
  setPassword,
  setPasswordConfirm,
  $errors,
  $isValid,
  setUsername,
  $user,
  onConfirmButtonClicked,
  $isLoading,
} from "../model";

const SignUpFeature = () => {
  const user = useStore($user);

  const isValid = useStore($isValid);
  const isLoading = useStore($isLoading);
  const errors = useStore($errors);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        onConfirmButtonClicked();
      }}
    >
      <AuthFormLayout
        inputs={
          <>
            <Input
              value={user.email}
              onChange={(evt) => setEmail(evt.currentTarget.value)}
              name="email"
              type="email"
              placeholder="Введите адрес эл.почты"
              fullwidth
              autoFocus
            />
            <Input
              value={user.username}
              onChange={(evt) => setUsername(evt.currentTarget.value)}
              name="login"
              type="text"
              placeholder="Придумайте имя пользователя"
              fullwidth
            />
            <Input
              value={user.password}
              onChange={(evt) => setPassword(evt.currentTarget.value)}
              name="password"
              type="password"
              placeholder="Введите пароль"
              fullwidth
            />
            <Input
              value={user.passwordConfirm}
              onChange={(evt) => setPasswordConfirm(evt.currentTarget.value)}
              name="passwordConfirm"
              type="password"
              placeholder="Повторите пароль"
              fullwidth
            />
          </>
        }
        buttons={
          <>
            <Button
              type="submit"
              disabled={isValid}
              variant="contained"
              color="primary"
              fullwidth
            >
              Создать
            </Button>
            <ButtonLink to={routePaths.publicNavigation.HOME}>Назад</ButtonLink>
          </>
        }
      />
    </form>
  );
};

export default SignUpFeature;
