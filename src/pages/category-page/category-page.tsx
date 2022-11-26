import React from "react";
import { useList, useStore } from "effector-react";
import { $finalTasks, TaskCard } from "entities/tasks";
import { Container } from "shared/ui/container/container";
import st from "./styles.module.scss";
import dayjs from "dayjs";
import { dateFormatter } from "shared/lib/dateFormatter";

const CategoryPage = () => {
  const currentTasks = useList($finalTasks, (task) => (
    <li>
      <TaskCard
        id={task.id}
        files={8}
        title={task.title}
        creationDate={dateFormatter(task.creationDate)}
        deadline={dateFormatter(task.deadline)}
        key={task.id}
      />
    </li>
  ));
  return (
    <section className={st.task_section}>
      <Container>
        <div className={st.section_top}>
          <p>Задачи</p>
          <div className={st.filters_wrap}>
            <select name="" id="" className={st.select}></select>
            <select name="" id="" className={st.select}></select>
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
