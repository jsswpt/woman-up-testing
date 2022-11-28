import { useStore } from "effector-react";
import { Category } from "shared/api/internal/category/category.type";
import { Button } from "shared/ui/button/button";
import { Input } from "shared/ui/input/input";
import { ModalCard } from "shared/ui/modal-card/modal-card";

import st from "./styles.module.scss";

type CategoryFormProps = {
  onSubmit: (evt: React.FormEvent<HTMLFormElement>) => void;
  onReset: (evt: React.FormEvent<HTMLFormElement>) => void;
  category: Category;
  onNameChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  buttonTitle: string;
  title: string;
};

export const CategoryForm = (props: CategoryFormProps) => {
  return (
    <ModalCard>
      <div className={st.card_top}>
        <h4 className={st.title}>{props.title}</h4>
      </div>
      <form
        className={st.form}
        onSubmit={props.onSubmit}
        onReset={props.onSubmit}
      >
        <div className={st.form_top}>
          <Input
            value={props.category.name}
            onChange={props.onNameChange}
            placeholder="Введите название категории"
            fullwidth
          />
        </div>
        <div className={st.buttons_wrap}>
          <Button
            disabled={!props.category.name}
            variant="contained"
            color="primary"
            type="submit"
          >
            {props.buttonTitle}
          </Button>
          <Button variant="contained" color="warning" type="reset">
            Закрыть
          </Button>
        </div>
      </form>
    </ModalCard>
  );
};
