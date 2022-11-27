import classNames from "classnames";
import { setCurrentChild, toggleIsOpen } from "entities/modal";
import { AddTaskFeature } from "feature";
import React from "react";
import { Button } from "shared/ui/button/button";
import { Container } from "shared/ui/container/container";
import st from "./styles.module.scss";

const Header = () => {
  return (
    <header className={st.header}>
      <Container className={st.header_container}>
        <div className={classNames(st.header_wrap, st.toggle_task_wrap)}>
          <Button
            onClick={() => {
              setCurrentChild(<AddTaskFeature />);
              toggleIsOpen(true);
            }}
          >
            Новая
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
