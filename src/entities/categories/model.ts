import {
  attach,
  createEffect,
  createEvent,
  createStore,
  sample,
} from "effector";
import { getCategories } from "shared/api/internal/category/category";
import { Category } from "shared/api/internal/category/category.type";

export const getCategoriesFx = createEffect(getCategories);

export const $categories = createStore<Category[]>([]);

export const $isGetted = createStore(false);

export const $isLoading = getCategoriesFx.pending;

export const onPageLoaded = createEvent();

sample({
  clock: getCategoriesFx.doneData,
  target: $categories,
});

sample({
  clock: getCategoriesFx.doneData,
  fn: () => {
    return true;
  },
  target: $isGetted,
});
