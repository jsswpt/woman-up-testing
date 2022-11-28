import { useCallback } from "react";
import { useStore } from "effector-react";
import { $currentTasks, $tasks } from "entities/tasks";
import { createEffect, createEvent, sample } from "effector";
import { Task } from "shared/api/internal/task/task.type";
import { editTask } from "shared/api/internal/task/task";

export const useToggleTaskFeature = (taskId: string) => {
  const tasks = useStore($currentTasks);

  let findedTask = tasks.find((task) => task.id === taskId)!;

  const toggleTaskState = useCallback(() => {
    onButtonClicked(findedTask);
  }, []);

  return { findedTask, toggleTaskState };
};

const toggleTaskFx = createEffect(editTask);

const onButtonClicked = createEvent<Task>();

const toggleTask = createEvent<Task>();

sample({
  clock: onButtonClicked,
  fn: (task) => ({ ...task!, isDone: !task!.isDone }),
  target: toggleTaskFx,
});

sample({
  clock: toggleTaskFx.doneData,
  target: toggleTask,
});

sample({
  clock: toggleTask,
  source: $tasks,
  fn: (tasks, taskId) => {
    const newTasks = tasks.map((task) =>
      task.id === taskId.id ? { ...task, isDone: !task.isDone } : task
    );

    return newTasks;
  },
  target: $tasks,
});
