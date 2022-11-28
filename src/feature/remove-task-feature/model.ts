import { createEvent, sample } from "effector";
import { $tasks } from "entities/tasks";
import { useCallback } from "react";

export const useRemoveTask = (taskId: string) => {
  const removeTask = useCallback(() => {
    removeTaskEvent(taskId)
  }, []);

  return { removeTask };
};

const removeTaskEvent = createEvent<string>();

sample({
  clock: removeTaskEvent,
  source: $tasks,
  fn: (tasks, taskId) => {
    const newTasks = tasks.filter((item) => item.id !== taskId);

    return newTasks;
  },
  target: $tasks,
});
