import {
  attach,
  createEffect,
  createEvent,
  createStore,
  sample,
} from "effector";
import { $session } from "entities/session";
import { createAccount } from "shared/api/internal/session/session";
import { CreateAccount } from "shared/api/internal/session/session.type";

interface Store extends CreateAccount {
  passwordConfirm: string;
}

const createAccountFx = createEffect(createAccount);

export const $user = createStore<Store>({
  email: "",
  password: "",
  passwordConfirm: "",
  username: "",
});

export const $isValid = createStore(false);
export const $errors = createStore<Store | null>({
  email: "",
  password: "",
  passwordConfirm: "",
  username: "",
});

const createAccountWithDataFx = attach({
  effect: createAccountFx,
  source: $user,
  mapParams: (params, state) => {
    return state;
  },
});

export const $isLoading = createAccountWithDataFx.pending;

export const setEmail = createEvent<string>();
export const setUsername = createEvent<string>();
export const setPassword = createEvent<string>();
export const setPasswordConfirm = createEvent<string>();

export const onConfirmButtonClicked = createEvent();

$user.on(setEmail, (state, email) => {
  return { ...state, email };
});

$user.on(setUsername, (state, username) => {
  return { ...state, username };
});

$user.on(setPassword, (state, password) => {
  return { ...state, password };
});

$user.on(setPasswordConfirm, (state, passwordConfirm) => {
  return { ...state, passwordConfirm };
});

sample({
  clock: [setEmail, setPassword, setPasswordConfirm, setUsername],
  source: $user,
  fn: ({ email, password, passwordConfirm, username }) => {
    const errors: Store = {
      email: "",
      password: "",
      passwordConfirm: "",
      username: "",
    };
    if (email.trim().length < 8) {
      errors.email = "Некорректный адрес эл. почты";
    }
    if (username.trim().length < 5) {
      errors.email = "Некорректное имя пользователя";
    }
    if (password.trim().length < 8) {
      errors.password = "Невалидный пароль";
    }
    if (password && passwordConfirm !== password) {
      errors.passwordConfirm = "Пароли не совпадают";
    }

    if (errors.email || errors.password || errors.passwordConfirm)
      return errors;
    return null;
  },
  target: $errors,
});

sample({
  clock: $errors,
  fn: (errors) => {
    return !!errors;
  },
  target: $isValid,
});

sample({
  clock: onConfirmButtonClicked,
});

sample({
  clock: onConfirmButtonClicked,
  target: createAccountWithDataFx,
});

sample({
  clock: createAccountWithDataFx.doneData,
  target: $session,
});
