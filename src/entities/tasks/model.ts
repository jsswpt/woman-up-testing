import { createEvent, createStore, sample } from "effector";
import { Filter } from "shared/api/internal/types/filter.type";
import { Task } from "shared/api/internal/task/task.type";

/**
 * Хранит в себе все таски
 */
export const $tasks = createStore<Task[]>([
  {
    categoryId: 1,
    creationDate: new Date("2022-11-25"),
    deadline: new Date("2022-12-11"),
    files: null,
    id: 1,
    title: "Sometask category 1",
    description: "Первая таска",
  },
  {
    categoryId: 1,
    creationDate: new Date("2022-11-26"),
    deadline: new Date("2022-12-13"),
    files: null,
    id: 2,
    title: "Sometask2 category 1",
    description: "Первая таска",
  },
  {
    categoryId: 1,
    creationDate: new Date("2022-11-26"),
    deadline: new Date("2022-12-13"),
    files: null,
    id: 3,
    title: "Sometask2 category 1",
    description: "Первая таска",
  },
  {
    categoryId: 1,
    creationDate: new Date("2022-11-26"),
    deadline: new Date("2022-12-13"),
    files: null,
    id: 4,
    title: "Sometask2 category 1",
    description: "Первая таска",
  },
  {
    categoryId: 2,
    creationDate: new Date("2022-11-25"),
    deadline: new Date("2022-12-11"),
    files: null,
    id: 5,
    title: "Sometask category 2",
    description: "Первая таска",
  },
  {
    categoryId: 2,
    creationDate: new Date("2022-11-26"),
    deadline: new Date("2022-12-13"),
    files: null,
    id: 6,
    title: "Sometask2 category 2",
    description: "Первая таска",
  },
  {
    categoryId: 2,
    creationDate: new Date("2022-11-26"),
    deadline: new Date("2022-12-13"),
    files: null,
    id: 6,
    title: "Sometask2 category 2",
    description: "Первая таска",
  },
  {
    categoryId: 2,
    creationDate: new Date("2022-11-26"),
    deadline: new Date("2022-12-13"),
    files: null,
    id: 6,
    title: "Sometask2 category 2",
    description: "Первая таска",
  },
]);

/**
 * Хранит в себе таски текущей категории
 */
export const $currentTasks = createStore<Task[]>([]);

/**
 * Хранит в себе отфильтрованные / отсортированные таски
 */
const $tempTasks = createStore<Task[]>([]);

/**
 * Хранит итоговый список тасок (если есть фильтры, то tempTasks, иначе currentTasks)
 */
export const $finalTasks = createStore<Task[]>([]);

/**
 * Хранит массив фильтров
 */
export const $filters = createStore<Filter<Task>[]>([]);

export const $currentCategory = createStore<number | null>(null);

export const setCurrentTasks = createEvent();

export const addFilter = createEvent<Filter<Task>>();

export const setCurrentCategory = createEvent<number>();

sample({
  clock: setCurrentCategory,
  target: $currentCategory,
});

sample({
  clock: setCurrentCategory,
  target: setCurrentTasks,
});

sample({
  source: { tasks: $tasks, categoryId: $currentCategory },
  clock: setCurrentTasks,
  fn: ({ tasks, categoryId }) => {
    console.log(categoryId);
    const filtredTasks = tasks.filter((task) => task.categoryId === categoryId);
    return filtredTasks;
  },
  target: $currentTasks,
});

sample({
  source: {
    filters: $filters,
    currentTasks: $currentTasks,
    tempTasks: $tempTasks,
  },
  clock: [addFilter, setCurrentTasks, setCurrentCategory],
  fn: ({ currentTasks, filters, tempTasks }) => {
    if (filters.length) {
      return tempTasks;
    }
    return currentTasks;
  },
  target: $finalTasks,
});
