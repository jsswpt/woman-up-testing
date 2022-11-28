import { CategoryForm } from "entities/categories/ui/category-form/category-form";
import {
  $currentCategory,
  $isLoading,
  onFeatureLoaded,
  onSubmit,
  replaceCategory,
  setName,
} from "../model";
import React, { useLayoutEffect } from "react";
import { useStore } from "effector-react";
import { toggleIsOpen } from "entities/modal";
import { Loader } from "shared/ui/loader/loader";
import { ModalCard } from "shared/ui/modal-card/modal-card";

const EditCategoryFeature = (props: { categoryId: string }) => {
  useLayoutEffect(() => {
    onFeatureLoaded(props.categoryId);
  }, []);

  const category = useStore($currentCategory);
  const isLoading = useStore($isLoading);

  if (category && !isLoading) {
    return (
      <CategoryForm
        onNameChange={(evt) => setName(evt.currentTarget.value)}
        onReset={(evt) => {
          evt.preventDefault();
          toggleIsOpen(false);
        }}
        onSubmit={(evt) => {
          evt.preventDefault();
          onSubmit();
        }}
        buttonTitle="Изменить"
        title="Редактирование категории"
        category={category!}
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

export default EditCategoryFeature;
