import { createEvent, createStore, sample } from "effector";
import React from "react";

export const $isOpen = createStore(false);

export const $currentChild = createStore<React.ReactNode | null>(null);

export const toggleIsOpen = createEvent<boolean>();
export const setCurrentChild = createEvent<React.ReactNode>();

sample({
  clock: toggleIsOpen,
  target: $isOpen,
});

sample({
  clock: setCurrentChild,
  target: $currentChild,
});
