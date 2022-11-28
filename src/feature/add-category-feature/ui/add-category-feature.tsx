import { useStore } from "effector-react";
import { CategoryForm } from "entities/categories/ui/category-form/category-form";
import { toggleIsOpen } from "entities/modal";
import { Button } from "shared/ui/button/button";
import { Input } from "shared/ui/input/input";
import { ModalCard } from "shared/ui/modal-card/modal-card";
import { onButtonClicked, $category, setName } from "../model";
import st from "./styles.module.scss";

export const AddCategoryFeature = () => {
  const category = useStore($category);
  return (
    <CategoryForm
      title="Новая категория"
      onReset={(evt) => {
        evt.preventDefault();
        toggleIsOpen(false);
      }}
      onSubmit={(evt) => {
        evt.preventDefault();
        onButtonClicked();
        toggleIsOpen(false);
      }}
      buttonTitle="Создать"
      category={category}
      onNameChange={(evt) => setName(evt.currentTarget.value)}
    />
  );
};
