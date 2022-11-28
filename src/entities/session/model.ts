import {
  attach,
  createEffect,
  createEvent,
  createStore,
  sample,
} from "effector";
import { getUserAccount } from "shared/api/internal/session/session";
import { SessionType } from "shared/api/internal/session/session.type";

export const getUserAccountFx = createEffect(getUserAccount);

export const $session = createStore<SessionType | null>(null);
export const $isAuthorized = createStore(false);

export const $isGetted = createStore(false);
export const $isLoading = getUserAccountFx.pending;

export const toggleIsGetted = createEvent<boolean>();

$isGetted.on(getUserAccountFx.doneData, (_, user) => {
  return true;
});

$isGetted.on(toggleIsGetted, (_, isGetted) => {
  return isGetted;
});

sample({
  clock: $session,
  fn: (session) => {
    return !!session;
  },
  target: $isAuthorized,
});

sample({
  clock: getUserAccountFx.doneData,
  target: $session,
});
