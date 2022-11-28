import { toggleIsOpen } from "entities/modal";
import React from "react";
import { Button } from "shared/ui/button/button";
import { ModalCard } from "shared/ui/modal-card/modal-card";
import { useRemoveCategory } from "../model";

import st from "./styles.module.scss";

const RemoveCategoryFeature = (props: { categoryId: string }) => {
  const model = useRemoveCategory(props.categoryId);
  return (
    <ModalCard>
      <h4 className={st.title}>Удаление категории</h4>
      <p className={st.confirm}>Подтвердите удаление категории</p>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          model.removeCategory();
          toggleIsOpen(false);
        }}
        onReset={(evt) => {
          evt.preventDefault();
          toggleIsOpen(false);
        }}
      >
        <div className={st.buttons_wrap}>
          <Button variant="contained" color="danger" type="submit">
            Удалить
          </Button>
          <Button variant="contained" color="inherit" type="reset">
            Закрыть
          </Button>
        </div>
      </form>
    </ModalCard>
  );
};

export default RemoveCategoryFeature;
