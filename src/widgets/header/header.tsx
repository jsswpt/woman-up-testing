import React, { Suspense } from "react";
import classNames from "classnames";
import { useStore } from "effector-react";
import { setCurrentChild, toggleIsOpen } from "entities/modal";
import { $session } from "entities/session";

import { useScreen } from "shared/lib/useScreen";
import { Button } from "shared/ui/button/button";
import { Container } from "shared/ui/container/container";
import st from "./styles.module.scss";

const AddTaskFeature = React.lazy(
  () => import("feature/add-task-feature/ui/add-task-feature")
);

const Header = () => {
  const user = useStore($session);
  const screen = useScreen();
  return (
    <header className={st.header}>
      <Container className={st.header_container}>
        {screen !== "xs" && (
          <div className={classNames(st.header_wrap, st.toggle_task_wrap)}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                setCurrentChild(
                  <Suspense>
                    <AddTaskFeature />
                  </Suspense>
                );
                toggleIsOpen(true);
              }}
            >
              Новая задача
            </Button>
          </div>
        )}
        <div className={classNames(st.header_wrap, st.welcome_wrap)}>
          <p className={st.welcome}>Привет, {user!.username} 🙂</p>
        </div>
      </Container>
    </header>
  );
};

export default Header;
