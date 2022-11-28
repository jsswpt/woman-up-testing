import React, { Suspense } from "react";
import { useList, useStore } from "effector-react";
import { $finalTasks } from "entities/tasks";
import { Container } from "shared/ui/container/container";
import st from "./styles.module.scss";
import { dateFormatter } from "shared/lib/dateFormatter";
import { Select } from "shared/ui/select/select";
import { TaskCard } from "widgets/task-card/task-card";

const CategoryPage = () => {
  const currentTasks = useList($finalTasks, (task) => (
    <li>
      <TaskCard
        id={task.id}
        files={8}
        title={task.title}
        creationDate={dateFormatter(task.creationDate)}
        deadline={dateFormatter(task.deadline)}
        description={task.description}
        isDone={task.isDone}
        key={task.id}
      />
    </li>
  ));
  return (
    <section className={st.task_section}>
      <Container>
        <div className={st.section_top}>
          <h3 className={st.title}>Задачи</h3>
          <div className={st.filters_wrap}>
            <Select
              placeholder="???"
              defaultValue={12}
              name=""
              id=""
              className={st.select}
            >
              <option value={12}>Что???</option>
              <option value={123}>Что???</option>
            </Select>
            <Select name="" id="" className={st.select}></Select>
          </div>
        </div>
        <div>
          <ul className={st.tasks_grid}>{currentTasks}</ul>
        </div>
      </Container>
    </section>
  );
};

export default CategoryPage;
