import { createStore } from "effector";
import { Category } from "shared/api/internal/types/category.type";

export const $categories = createStore<Category[]>([
  { creationDate: new Date(), id: 1, name: "Дом" },
  { creationDate: new Date(), id: 2, name: "Работа" },
]);
