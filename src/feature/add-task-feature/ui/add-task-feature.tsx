import dayjs from "dayjs";
import { useStore } from "effector-react";
import { $categories } from "entities/categories";
import { $currentCategory, setCurrentCategory } from "entities/tasks";
import { useEffect } from "react";
import { Button } from "shared/ui/button/button";
import { Card } from "shared/ui/card/card";
import { Input } from "shared/ui/input/input";
import { Textarea } from "shared/ui/input/textarea";
import { Select } from "shared/ui/select/select";
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

import st from "./styles.module.scss";

export const AddTaskFeature = () => {
  const task = useStore($task);
  const categories = useStore($categories);
  const currentCategory = useStore($currentCategory);

  useEffect(() => {
    if (currentCategory) {
      setCategoryId(currentCategory);
    }
  }, []);

  return (
    <Card className={st.card}>
      <h4 className={st.title}>Новая задача</h4>
      <form
        className={st.form}
        onSubmit={(evt) => {
          evt.preventDefault();
          addTask();
        }}
        onReset={(evt) => {
          toggleIsOpen(false);
        }}
      >
        <div className={st.form_top}>
          <Input
            onChange={(evt) => setTitle(evt.currentTarget.value)}
            placeholder="Введите задачу"
            className={st.input_title}
            value={task?.title}
          />
          <div className={st.date_time_wrap}>
            {categories.length ? (
              <Select
                value={task.categoryId}
                onChange={(evt) => setCategoryId(evt.currentTarget.value)}
              >
                {categories.map((category) => (
                  <option value={category.id} key={category.id}>
                    {category.name}
                  </option>
                ))}
              </Select>
            ) : (
              <Button>Добавить категорию</Button>
            )}
          </div>
        </div>
        <div className={st.form_middle}>
          <Input
            onChange={(evt) => {
              setDeadline(dayjs(evt.currentTarget.value).toDate());
            }}
            type="date"
            value={dayjs(task?.deadline).format("YYYY-MM-DD").toString()}
          />
          <Textarea
            onChange={(evt) => setDescription(evt.currentTarget.value)}
            rows={5}
            placeholder="Введите описание задачи"
            className={st.textarea}
            value={task.description!}
          />
        </div>
        <div className={st.form_bottom}>
          <Button
            type="submit"
            className={st.create_button}
            color="primary"
            variant="contained"
          >
            Создать
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
