import { createStore } from "effector";
import { Category } from "shared/api/internal/types/category.type";

export const $categories = createStore<Category[]>([]);
