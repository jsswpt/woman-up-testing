import { createEffect, createEvent, createStore, sample } from "effector";
import { Filter } from "shared/api/internal/types/filter.type";
import { Task } from "shared/api/internal/task/task.type";
import { getTasks as getTasksApi } from "shared/api/internal/task/task";

const getTasksFx = createEffect(getTasksApi);

export const $isLoading = getTasksFx.pending;

/**
 * Хранит в себе все таски
 */
export const $tasks = createStore<Task[]>([]);

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
export const $finalTasksLength = createStore<number>(0);

/**
 * Хранит массив фильтров
 */
export const $filters = createStore<Filter<Task>[]>([]);

export const $currentCategory = createStore<string | null>(null);

export const onPageLoaded = createEvent();

export const addFilter = createEvent<Filter<Task>>();
const filterTasks = createEvent();

export const setCurrentCategory = createEvent<string>();
export const setCurrentTasks = createEvent();

/**Если стор не хранит задач, с текущей категорий, то задачи запрашиваются с бд */
sample({
  clock: $currentCategory,
  source: $tasks,
  filter: (tasks, category) => {
    return !tasks.find((item) => item.categoryId === category);
  },
  fn: (_, category) => {
    return category!;
  },
  target: getTasksFx,
});

sample({
  clock: getTasksFx.doneData,
  target: $tasks,
});

sample({
  clock: setCurrentCategory,
  target: $currentCategory,
});

sample({
  clock: setCurrentCategory,
  target: setCurrentTasks,
});

/**
 * Устанавливает текущие задачи в зависимости от категории
 */
sample({
  clock: setCurrentTasks,
  source: { category: $currentCategory, tasks: $tasks },
  fn: ({ category, tasks }) => {
    return tasks.filter((item) => item.categoryId === category);
  },
  target: $currentTasks,
});

sample({
  clock: $tasks,
  target: setCurrentTasks,
});

/**В зависимости от того, есть фильтры или нет, кладёт в finalTasks отфильтрованные задачи, либо обычные */
sample({
  clock: [$filters, $tasks, setCurrentTasks],
  source: {
    currentTasks: $currentTasks,
    tempTasks: $tempTasks,
    filters: $filters,
  },
  fn: ({ currentTasks, tempTasks, filters }) => {
    if (filters.length) {
      return tempTasks;
    }
    return currentTasks;
  },
  target: $finalTasks,
});

sample({
  clock: $finalTasks,
  fn: (tasks) => tasks.length,
  target: $finalTasksLength,
});
