import { toggleIsOpen } from "entities/modal";
import React from "react";
import { Button } from "shared/ui/button/button";
import { Card } from "shared/ui/card/card";
import { ModalCard } from "shared/ui/modal-card/modal-card";
import { useRemoveTask } from "../model";

import st from "./styles.module.scss";

const RemoveTaskFeature = (props: { taskId: string }) => {
  const model = useRemoveTask(props.taskId);
  return (
    <ModalCard>
      <div className={st.card_top}>
        <h4 className={st.title}>Удалить задачу</h4>
        <p className={st.sure}>Вы уверены, что хотите удалить задачу?</p>
      </div>

      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          model.removeTask();
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

export default RemoveTaskFeature;
