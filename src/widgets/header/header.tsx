import React from "react";
import { Container } from "shared/ui/container/container";
import st from "./styles.module.scss";

const Header = () => {
  return (
    <header className={st.header}>
      <Container className={st.header_container}>Header</Container>
    </header>
  );
};

export default Header;
