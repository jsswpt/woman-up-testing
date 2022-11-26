import { createEvent, createStore, sample } from "effector";
import { Filter } from "shared/api/internal/types/filter.type";
import { Task } from "shared/api/internal/types/task.type";

/**
 * Хранит в себе все таски
 */
const $tasks = createStore<Task[]>([
  {
    categoryId: 1,
    creationDate: new Date("2022-11-25"),
    deadline: new Date("2022-12-11"),
    files: null,
    id: 1,
    title: "Sometask category 1",
  },
  {
    categoryId: 1,
    creationDate: new Date("2022-11-26"),
    deadline: new Date("2022-12-13"),
    files: null,
    id: 2,
    title: "Sometask2 category 1",
  },
  {
    categoryId: 1,
    creationDate: new Date("2022-11-26"),
    deadline: new Date("2022-12-13"),
    files: null,
    id: 3,
    title: "Sometask2 category 1",
  },
  {
    categoryId: 1,
    creationDate: new Date("2022-11-26"),
    deadline: new Date("2022-12-13"),
    files: null,
    id: 4,
    title: "Sometask2 category 1",
  },
  {
    categoryId: 2,
    creationDate: new Date("2022-11-25"),
    deadline: new Date("2022-12-11"),
    files: null,
    id: 5,
    title: "Sometask category 2",
  },
  {
    categoryId: 2,
    creationDate: new Date("2022-11-26"),
    deadline: new Date("2022-12-13"),
    files: null,
    id: 6,
    title: "Sometask2 category 2",
  },
  {
    categoryId: 2,
    creationDate: new Date("2022-11-26"),
    deadline: new Date("2022-12-13"),
    files: null,
    id: 6,
    title: "Sometask2 category 2",
  },
  {
    categoryId: 2,
    creationDate: new Date("2022-11-26"),
    deadline: new Date("2022-12-13"),
    files: null,
    id: 6,
    title: "Sometask2 category 2",
  },
]);

/**
 * Хранит в себе таски текущей категории
 */
const $currentTasks = createStore<Task[]>([]);

/**
 * Хранит в себе отфильтрованные / отсортированные таски
 */
const $tempTasks = createStore<Task[]>([]);

/**
 * Хранит итоговый список тасок (если есть фильтры, то tempTasks, иначе currentTasks)
 */
export const $finalTasks = createStore<Task[]>([]);

export const $filters = createStore<Filter<Task>[]>([]);

export const setCurrentTasks = createEvent<number>();

export const addFilter = createEvent<Filter<Task>>();

sample({
  source: $tasks,
  clock: setCurrentTasks,
  fn: (tasks, category) => {
    const filtredTasks = tasks.filter((task) => task.categoryId === category);
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
  clock: [addFilter, setCurrentTasks],
  fn: ({ currentTasks, filters, tempTasks }) => {
    if (filters.length) {
      return tempTasks;
    }
    return currentTasks;
  },
  target: $finalTasks,
});
