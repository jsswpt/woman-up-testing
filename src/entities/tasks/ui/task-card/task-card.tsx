import React, { useMemo } from "react";
import { Card } from "shared/ui/card/card";
import st from "./styles.module.scss";

interface TaskCardProps {
  title: string;
  files: number;
  creationDate: string;
  deadline: string;
  id: number;
}

export const TaskCard = (props: TaskCardProps) => {
  return (
    <Card className={st.card}>
      <div>{props.title}</div>
      <div>{props.creationDate}</div>
      <div>{props.deadline}</div>
    </Card>
  );
};
