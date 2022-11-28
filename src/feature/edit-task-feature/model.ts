import { createEffect, createEvent, createStore, sample } from "effector";
import { Task } from "shared/api/internal/task/task.type";
import { editTask as editTaskApi } from "shared/api/internal/task/task";
import { $currentTasks, $tasks } from "entities/tasks";

const editTaskFx = createEffect(editTaskApi);

export const $task = createStore<Task | null>(null);

/**Отслеживает загрузку компонента и, если он загружен, запускает поиск задачи */
export const onFeatureLoaded = createEvent<string>();

export const onButtonClicked = createEvent();

/** ищет задачу в главном сторе */
const getTask = createEvent<string>();

export const setTitle = createEvent<string>();
export const setDescription = createEvent<string>();
export const setDeadline = createEvent<Date>();
export const setCategoryId = createEvent<string>();
export const addFile = createEvent<File>();
export const removeFile = createEvent<string>();

const editTask = createEvent();

$task.on(setTitle, (state, title) => {
  return { ...state!, title };
});

$task.on(setDescription, (state, description) => {
  return { ...state!, description };
});

$task.on(setCategoryId, (state, categoryId) => {
  return { ...state!, categoryId };
});

$task.on(setDeadline, (state, deadline) => {
  return { ...state!, deadline };
});

/** Реализация старта поиска задачи при загрузке */
sample({
  clock: onFeatureLoaded,
  target: getTask,
});

/** Алгоритм поиска задачи */
sample({
  clock: getTask,
  source: $currentTasks,
  fn: (tasks, taskId) => {
    const findedTask = tasks.find((item) => item.id === taskId)!;
    return findedTask;
  },
  target: $task,
});

sample({
  clock: onButtonClicked,
  source: $task,
  fn: (task) => ({ ...task! }),
  target: editTaskFx,
});

sample({
  clock: editTaskFx.doneData,
  target: editTask,
});

/** Замена задачи в главном сторе */
sample({
  clock: editTask,
  source: { task: $task, tasks: $tasks },
  fn: ({ tasks, task }) => {
    return tasks.map((item) => (item.id === task!.id ? { ...task! } : item));
  },
  target: $tasks,
});
