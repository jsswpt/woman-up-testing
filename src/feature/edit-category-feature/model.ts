import { createEffect, createEvent, createStore, sample } from "effector";
import { $categories } from "entities/categories";
import { Category } from "shared/api/internal/category/category.type";
import { editCategory } from "shared/api/internal/category/category";

const editCategoryFx = createEffect(editCategory);

export const $currentCategory = createStore<Category | null>(null);

export const $isLoading = editCategoryFx.pending;

export const setName = createEvent<string>();

$currentCategory.on(setName, (state, name) => {
  return { ...state!, name };
});

export const onFeatureLoaded = createEvent<string>();

const getCurrentCategory = createEvent<string>();

export const onSubmit = createEvent();
export const replaceCategory = createEvent<Category>();

sample({
  clock: onFeatureLoaded,
  target: getCurrentCategory,
});

sample({
  clock: getCurrentCategory,
  source: $categories,
  fn: (categories, id) => {
    const findedCategory = categories.find((item) => item.id === id)!;
    return findedCategory;
  },
  target: $currentCategory,
});

sample({
  clock: onSubmit,
  source: $currentCategory,
  fn: (category) => category!,
  target: editCategoryFx,
});

sample({
  clock: editCategoryFx.doneData,
  target: replaceCategory,
});

sample({
  clock: editCategoryFx.failData,
  fn: (data) => console.log(data),
});

sample({
  clock: replaceCategory,
  source: $categories,
  fn: (categories, category) => {
    return categories.map((item) =>
      item.id === category!.id ? { ...item, ...category } : item
    );
  },
  target: $categories,
});
