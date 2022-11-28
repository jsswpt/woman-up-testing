import { useStore } from "effector-react";
import { $categories } from "entities/categories";
import { $currentCategory, setCurrentCategory, TaskForm } from "entities/tasks";
import { useEffect } from "react";

import {
  $task,
  addFile,
  addTask,
  removeFile,
  setCategoryId,
  setDeadline,
  setDescription,
  setTitle,
} from "../model";
import { setCurrentChild, toggleIsOpen } from "entities/modal/index";
import dayjs from "dayjs";
import { Card } from "shared/ui/card/card";
import { Loader } from "shared/ui/loader/loader";

export const AddTaskFeature = () => {
  const task = useStore($task);
  const categories = useStore($categories);
  const currentCategory = useStore($currentCategory);

  useEffect(() => {
    if (currentCategory) {
      setCategoryId(currentCategory);
    }
  }, []);

  if (task)
    return (
      <TaskForm
        title="Новая задача"
        submitButtonTitle="Создать"
        onSubmit={(evt) => {
          evt.preventDefault();
          addTask();
        }}
        onReset={(evt) => toggleIsOpen(false)}
        onTitleChange={(evt) => setTitle(evt.currentTarget.value)}
        task={task}
        categories={categories}
        categoryFallback={<>Добавить категорию</>}
        initialCategoryId={categories[0].id}
        onCategorySelect={(evt) => setCategoryId(evt.currentTarget.value)}
        onDeadlineChange={(evt) =>
          setDeadline(dayjs(evt.currentTarget.value).toDate())
        }
        onDescriptionChange={(evt) => setDescription(evt.currentTarget.value)}
      />
    );

  return (
    <Card>
      <Loader />
    </Card>
  );
};
