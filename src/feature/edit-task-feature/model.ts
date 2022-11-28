import { createEvent, createStore, sample } from "effector";
import { $currentTasks, $tasks } from "entities/tasks";
import { Task } from "shared/api/internal/task/task.type";

export const $task = createStore<Task | null>(null);

export const onFeatureLoaded = createEvent<string>();
const getTask = createEvent<string>();

export const setTitle = createEvent<string>();
export const setDescription = createEvent<string>();
export const setDeadline = createEvent<Date>();
export const setCategoryId = createEvent<string>();
export const addFile = createEvent<File>();
export const removeFile = createEvent<string>();

export const editTask = createEvent();

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

sample({
  clock: onFeatureLoaded,
  target: getTask,
});

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
  clock: editTask,
  source: { task: $task, tasks: $tasks },
  fn: ({ tasks, task }) => {
    return tasks.map((item) => (item.id === task!.id ? { ...task! } : item));
  },
  target: $tasks,
});
