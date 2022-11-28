import { createEffect, createEvent, sample } from "effector";
import { $tasks } from "entities/tasks";
import { useCallback } from "react";

import { removeTask } from "shared/api/internal/task/task";

export const useRemoveTask = (taskId: string) => {
  const removeTask = useCallback(() => {
    onButtonClicked(taskId);
  }, []);

  return { removeTask };
};

const removeTaskFx = createEffect(removeTask);

const onButtonClicked = createEvent<string>();
const removeTaskEvent = createEvent<string>();

sample({
  clock: onButtonClicked,
  target: removeTaskFx,
});

sample({
  clock: removeTaskFx.doneData,
  target: removeTaskEvent,
});

sample({
  clock: removeTaskEvent,
  source: $tasks,
  fn: (tasks, taskId) => {
    const newTasks = tasks.filter((item) => item.id !== taskId);

    return newTasks;
  },
  target: $tasks,
});
