import dayjs from "dayjs";
import { Category } from "shared/api/internal/category/category.type";
import { Task } from "shared/api/internal/task/task.type";
import { Button } from "shared/ui/button/button";
import { Card } from "shared/ui/card/card";
import { Input } from "shared/ui/input/input";
import { Textarea } from "shared/ui/input/textarea";
import { Select } from "shared/ui/select/select";
import st from "./styles.module.scss";

type TaskFormProps = {
  onSubmit: (evt: React.FormEvent<HTMLFormElement>) => void;
  onReset: (evt: React.FormEvent<HTMLFormElement>) => void;
  categories: Category[];
  task: Omit<Task, "isDone">;
  onTitleChange: (evt: React.FormEvent<HTMLInputElement>) => void;
  onDescriptionChange: (evt: React.FormEvent<HTMLTextAreaElement>) => void;
  onDeadlineChange: (evt: React.FormEvent<HTMLInputElement>) => void;
  onCategorySelect: (evt: React.FormEvent<HTMLSelectElement>) => void;
  initialCategoryId: string;
  categoryFallback: React.ReactNode;
  title: string;
  submitButtonTitle: string;
};

export const TaskForm = (props: TaskFormProps) => {
  return (
    <Card className={st.card}>
      <h4 className={st.title}>{props.title}</h4>
      <form
        className={st.form}
        onSubmit={props.onSubmit}
        onReset={props.onReset}
      >
        <div className={st.form_top}>
          <Input
            onChange={props.onTitleChange}
            placeholder="Введите задачу"
            className={st.input_title}
            value={props.task.title}
          />
          <div className={st.date_time_wrap}>
            {props.categories.length ? (
              <Select
                value={props.initialCategoryId}
                onChange={props.onCategorySelect}
              >
                {props.categories.map((category) => (
                  <option value={category.id} key={category.id}>
                    {category.name}
                  </option>
                ))}
              </Select>
            ) : (
              props.categoryFallback
            )}
          </div>
        </div>
        <div className={st.form_middle}>
          <Input
            onChange={props.onDeadlineChange}
            type="date"
            value={dayjs(props.task.deadline).format("YYYY-MM-DD").toString()}
          />
          <Textarea
            onChange={props.onDescriptionChange}
            rows={5}
            placeholder="Введите описание задачи"
            className={st.textarea}
            value={props.task.description!}
          />
        </div>
        <div className={st.form_bottom}>
          <Button
            type="submit"
            className={st.create_button}
            color="primary"
            variant="contained"
          >
            {props.submitButtonTitle}
          </Button>
          <Button
            type="reset"
            className={st.close_button}
            color="warning"
            variant="contained"
          >
            Закрыть
          </Button>
        </div>
      </form>
    </Card>
  );
};
