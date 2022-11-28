import { useEffect } from "react";
import { useList, useStore } from "effector-react";
import {
  $finalTasks,
  $isLoading,
  $finalTasksLength,
  onPageLoaded,
} from "entities/tasks";
import { Container } from "shared/ui/container/container";
import { dateFormatter } from "shared/lib/dateFormatter";
import { Select } from "shared/ui/select/select";
import { TaskCard } from "widgets/task-card/task-card";
import { useParams } from "react-router-dom";

import st from "./styles.module.scss";
import { Loader } from "shared/ui/loader/loader";

const CategoryPage = () => {
  const currentTasks = useList($finalTasks, (task) => (
    <li>
      <TaskCard
        id={task.id}
        file={task.file}
        title={task.title}
        creationDate={dateFormatter(task.creationDate)}
        deadline={dateFormatter(task.deadline)}
        description={task.description}
        isDone={task.isDone}
        key={task.id}
      />
    </li>
  ));

  const currentTasksLength = useStore($finalTasksLength);

  const isLoading = useStore($isLoading);

  const { categoryId } = useParams();

  useEffect(() => {
    onPageLoaded();
  }, [categoryId]);

  return (
    <section className={st.task_section}>
      <Container>
        <div className={st.section_top}>
          <h3 className={st.title}>Задачи</h3>
          <div className={st.filters_wrap}>
            <p>Можно поставить фильтрацию / сортировку</p>
          </div>
        </div>
        {!isLoading ? (
          <div>
            {currentTasksLength ? (
              <ul className={st.tasks_grid}>{currentTasks}</ul>
            ) : (
              <h5 className={st.empty_title}>
                Список задач в данной категории пуст
              </h5>
            )}
          </div>
        ) : (
          <Loader />
        )}
      </Container>
    </section>
  );
};

export default CategoryPage;
