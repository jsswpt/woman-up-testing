import ToggleTaskStateFeature from "feature/toggle-task-state-feature/ui/toggle-task-feature";
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { routePaths } from "shared/api/internal/consts/route-paths";
import { IconButton } from "shared/ui/button/icon-button";
import { Card } from "shared/ui/card/card";
import st from "./styles.module.scss";

interface TaskCardProps {
  title: string;
  files: number;
  creationDate: string;
  description: string | null;
  deadline: string;
  id: string;
  isDone: boolean;
}

export const TaskCard = (props: TaskCardProps) => {
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
        ></IconButton>
        <ToggleTaskStateFeature taskId={props.id} />
        <IconButton size="small" variant="outlined" color="danger"></IconButton>
      </div>
    </Card>
  );
};
