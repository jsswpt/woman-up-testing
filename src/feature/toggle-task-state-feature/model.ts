import { useCallback } from "react";
import { useStore } from "effector-react";
import { $currentTasks, $tasks } from "entities/tasks";
import { createEvent, sample } from "effector";

export const useToggleTaskFeature = (taskId: string) => {
  const tasks = useStore($currentTasks);

  let findedTask = tasks.find((task) => task.id === taskId)!;

  const toggleTaskState = useCallback(() => {
    toggleTask(taskId);
  }, []);

  return { findedTask, toggleTaskState };
};

const toggleTask = createEvent<string>();

sample({
  clock: toggleTask,
  source: $tasks,
  fn: (tasks, taskId) => {
    const newTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, isDone: !task.isDone } : task
    );

    return newTasks;
  },
  target: $tasks,
});
