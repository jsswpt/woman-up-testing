import { createEffect, createEvent, createStore, sample } from "effector";
import { $categories } from "entities/categories";
import { $session } from "entities/session";
import { Category } from "shared/api/internal/category/category.type";
import { getRandomId } from "shared/lib/getRandomId";
import { addCategory as addCategoryApi } from "shared/api/internal/category/category";

const addCategoryBaseFx = createEffect(addCategoryApi);

export const $category = createStore<Category>({
  creationDate: new Date(),
  id: "",
  name: "",
  ownerId: "",
});

export const setName = createEvent<string>();

export const onButtonClicked = createEvent();

const addCategory = createEvent<Category>();

$category.on(setName, (state, name) => {
  return { ...state, name: name };
});

sample({
  clock: onButtonClicked,
  source: { category: $category, categories: $categories, session: $session },
  filter: ({ category }) => {
    if (category.name) {
      return true;
    }
    return false;
  },
  fn: ({ category, session }) => {
    return { ...category, id: getRandomId(), ownerId: session!.id };
  },
  target: addCategoryBaseFx,
});

sample({
  clock: addCategoryBaseFx.doneData,
  target: addCategory,
});

sample({
  clock: addCategoryBaseFx.failData,
  fn: (data) => {
    console.log("error");
  },
});

sample({
  clock: addCategory,
  source: $categories,
  fn: (categories, category) => {
    return [...categories, category];
  },
  target: [$categories, addCategoryBaseFx],
});
