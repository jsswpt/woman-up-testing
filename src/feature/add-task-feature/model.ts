import { createEvent, createStore, sample } from "effector";
import {
  $currentCategory,
  $currentTasks,
  $tasks,
  setCurrentTasks,
} from "entities/tasks";
import { Task } from "shared/api/internal/task/task.type";

export const $task = createStore<Task>({
  categoryId: "",
  creationDate: new Date(),
  deadline: new Date(),
  description: "",
  files: [],
  id: "",
  title: "",
});

export const setTitle = createEvent<string>();
export const setDescription = createEvent<string>();
export const setDeadline = createEvent<Date>();
export const setCategoryId = createEvent<string>();
export const addFile = createEvent<File>();
export const removeFile = createEvent<string>();

export const addTask = createEvent();

$task.on(setTitle, (state, title) => {
  return { ...state, title };
});

$task.on(setDescription, (state, description) => {
  return { ...state, description };
});

$task.on(setCategoryId, (state, categoryId) => {
  return { ...state, categoryId };
});

$task.on(setDeadline, (state, deadline) => {
  return { ...state, deadline };
});

sample({
  clock: addTask,
  source: { tasks: $tasks, task: $task },
  fn: ({ tasks, task }) => {
    return [...tasks, task];
  },
  target: $tasks,
});

sample({
  clock: addTask,
  source: { task: $task, category: $currentCategory },
  filter: ({ task, category }) => {
    if (task.categoryId === category) return true;
    return false;
  },
  target: setCurrentTasks,
});
