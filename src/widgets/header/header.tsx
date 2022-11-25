import React from "react";
import { Container } from "shared/ui/container/container";
import st from "./styles.module.scss";

const Header = () => {
  return (
    <div className={st.header}>
      <Container className={st.header_container}>Header</Container>
    </div>
  );
};

export default Header;
