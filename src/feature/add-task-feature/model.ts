import { createEffect, createEvent, createStore, sample } from "effector";
import {
  $currentCategory,
  $currentTasks,
  $tasks,
  setCurrentTasks,
} from "entities/tasks";
import { addTask as addTaskApi } from "shared/api/internal/task/task";
import { Task, TaskBase } from "shared/api/internal/task/task.type";
import { getRandomId } from "shared/lib/getRandomId";

interface TaskType extends Omit<TaskBase<Date, File | null>, "isDone"> {}

export const $task = createStore<TaskType>({
  categoryId: "",
  creationDate: new Date(),
  deadline: new Date(),
  description: "",
  file: null,
  id: "",
  title: "",
});

const addTaskFx = createEffect(addTaskApi);

export const $isLoading = addTaskFx.pending;

export const setTitle = createEvent<string>();
export const setDescription = createEvent<string>();
export const setDeadline = createEvent<Date>();
export const setCategoryId = createEvent<string>();
export const addFile = createEvent<File>();
export const removeFile = createEvent<string>();

const addTask = createEvent<Task>();

export const onButtonClicked = createEvent();

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

$task.on(addFile, (state, file) => {
  console.log(file);
  return { ...state, file: file };
});

sample({
  clock: onButtonClicked,
  source: $task,
  fn: (task) => ({
    categoryId: task.categoryId,
    deadline: task.deadline,
    description: task.description,
    file: task.file,
    title: task.title,
    isDone: false,
    id: getRandomId(),
    creationDate: new Date(),
  }),
  target: addTaskFx,
});

sample({
  clock: addTaskFx.doneData,
  target: addTask,
});

sample({
  clock: addTask,
  source: $tasks,
  fn: (tasks, task) => {
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
