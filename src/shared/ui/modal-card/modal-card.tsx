import { Card } from "../card/card";

import st from "./styles.module.scss";

type ModalCardProps = {
  children: React.ReactNode;
};

export const ModalCard = (props: ModalCardProps) => {
  return <Card className={st.card}>{props.children}</Card>;
};
