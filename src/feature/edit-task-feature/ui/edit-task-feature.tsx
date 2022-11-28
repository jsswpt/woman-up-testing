import React, { useEffect } from "react";
import { TaskForm } from "entities/tasks";
import {
  $task,
  onFeatureLoaded,
  addFile,
  removeFile,
  onButtonClicked,
  setCategoryId,
  setDeadline,
  setDescription,
  setTitle,
} from "../model";
import { useStore } from "effector-react";
import { $categories } from "entities/categories";
import dayjs from "dayjs";
import { toggleIsOpen } from "entities/modal";
import { Card } from "shared/ui/card/card";
import { Loader } from "shared/ui/loader/loader";

const EditTaskFeature = (props: { taskId: string }) => {
  useEffect(() => {
    onFeatureLoaded(props.taskId);
  }, []);

  const task = useStore($task);
  const categories = useStore($categories);

  if (task)
    return (
      <TaskForm
        submitButtonTitle="Изменить"
        title="Редактирование"
        task={task!}
        categories={categories}
        categoryFallback={<></>}
        initialCategoryId={task!.categoryId}
        onFileChange={() => {}}
        onCategorySelect={(evt) => setCategoryId(evt.currentTarget.value)}
        onDescriptionChange={(evt) => setDescription(evt.currentTarget.value)}
        onDeadlineChange={(evt) =>
          setDeadline(dayjs(evt.currentTarget.value).toDate())
        }
        onTitleChange={(evt) => setTitle(evt.currentTarget.value)}
        onSubmit={(evt) => {
          evt.preventDefault();
          onButtonClicked();
          toggleIsOpen(false);
        }}
        onReset={(evt) => {
          evt.preventDefault();
          toggleIsOpen(false);
        }}
      />
    );

  return (
    <Card>
      <Loader />
    </Card>
  );
};

export default EditTaskFeature;
