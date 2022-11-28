import { useStore } from "effector-react";
import { $categories } from "entities/categories";
import { TaskForm } from "entities/tasks";
import { useEffect } from "react";

import {
  $task,
  addFile,
  onButtonClicked,
  removeFile,
  setCategoryId,
  setDeadline,
  setDescription,
  $isLoading,
  setTitle,
} from "../model";
import { setCurrentChild, toggleIsOpen } from "entities/modal/index";
import dayjs from "dayjs";
import { Card } from "shared/ui/card/card";
import { Loader } from "shared/ui/loader/loader";
import { useParams } from "react-router-dom";
import { Button } from "shared/ui/button/button";
import { AddCategoryFeature } from "feature/add-category-feature/ui/add-category-feature";
import { ModalCard } from "shared/ui/modal-card/modal-card";

export const AddTaskFeature = () => {
  const task = useStore($task);
  const categories = useStore($categories);

  const isLoading = useStore($isLoading);

  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      setCategoryId(categoryId);
      return;
    } else if (categories.length) {
      setCategoryId(categories[0].id);
      return;
    }
  }, []);

  if (task && !isLoading) {
    return (
      <TaskForm
        title="Новая задача"
        submitButtonTitle="Создать"
        onSubmit={(evt) => {
          evt.preventDefault();
          onButtonClicked();
        }}
        onReset={(evt) => toggleIsOpen(false)}
        onFileChange={(evt) => {
          const file = evt.currentTarget.files![0];
          addFile(file);
        }}
        onTitleChange={(evt) => setTitle(evt.currentTarget.value)}
        task={task}
        categories={categories}
        categoryFallback={
          <Button
            variant="contained"
            fullwidth
            onClick={() => setCurrentChild(<AddCategoryFeature />)}
          >
            Создать
          </Button>
        }
        initialCategoryId={categoryId!}
        onCategorySelect={(evt) => setCategoryId(evt.currentTarget.value)}
        onDeadlineChange={(evt) =>
          setDeadline(dayjs(evt.currentTarget.value).toDate())
        }
        onDescriptionChange={(evt) => setDescription(evt.currentTarget.value)}
      />
    );
  }
  if (isLoading) {
    return (
      <ModalCard>
        <Loader />
      </ModalCard>
    );
  }
  return <ModalCard></ModalCard>;
};
