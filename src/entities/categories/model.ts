import { createStore } from "effector";
import { Category } from "shared/api/internal/category/category.type";

export const $categories = createStore<Category[]>([
  { creationDate: new Date(), id: "anyid", name: "Дом", ownerId: "sadsad" },
  { creationDate: new Date(), id: "anyid2", name: "Работа", ownerId: "asdasd" },
]);
