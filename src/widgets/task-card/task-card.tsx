import { Suspense } from "react";
import { setCurrentChild, toggleIsOpen } from "entities/modal";
import ToggleTaskStateFeature from "feature/toggle-task-state-feature/ui/toggle-task-feature";
import React, { useMemo } from "react";
import { MdEdit, MdRemove } from "react-icons/md";
import { Link } from "react-router-dom";
import { routePaths } from "shared/api/internal/consts/route-paths";
import { IconButton } from "shared/ui/button/icon-button";
import { Card } from "shared/ui/card/card";
import st from "./styles.module.scss";

const RemoveTaskFeature = React.lazy(
  () => import("feature/remove-task-feature/ui/remove-task-feature")
);

const EditTaskFeature = React.lazy(
  () => import("feature/edit-task-feature/ui/edit-task-feature")
);

interface TaskCardProps {
  title: string;
  files: number;
  creationDate: string;
  description: string | null;
  deadline: string;
  id: string;
  isDone: boolean;
}

export const TaskCard = React.memo((props: TaskCardProps) => {
  return (
    <Card className={st.task_card}>
      <div>
        <p className={st.task_title}>{props.title}</p>
      </div>
      <div className={st.description_wrap}>
        <p className={st.task_description}>{props.description}</p>
      </div>
      <Link
        to={routePaths.privateNavigation.TASK + props.id}
        className={st.link}
      >
        Показать больше
      </Link>
      <hr />
      <div className={st.creation_deadline_wrap}>
        <p className={st.detail}>{props.creationDate}</p>
        <p className={st.detail}>{props.deadline}</p>
      </div>
      <div className={st.extra_els}>
        <IconButton
          size="small"
          variant="outlined"
          color="warning"
          onClick={() => {
            setCurrentChild(
              <Suspense>
                <EditTaskFeature taskId={props.id} />
              </Suspense>
            );
            toggleIsOpen(true);
          }}
        >
          <MdEdit />
        </IconButton>
        <ToggleTaskStateFeature taskId={props.id} />
        <IconButton
          size="small"
          variant="outlined"
          color="danger"
          onClick={() => {
            setCurrentChild(
              <Suspense>
                <RemoveTaskFeature taskId={props.id} />
              </Suspense>
            );
            toggleIsOpen(true);
          }}
        >
          <MdRemove />
        </IconButton>
      </div>
    </Card>
  );
});
