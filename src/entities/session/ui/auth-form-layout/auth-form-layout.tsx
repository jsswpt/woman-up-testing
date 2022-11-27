import React from "react";

import st from "./styles.module.scss";

type AuthFormLayoutProps = {
  beforeEl?: React.ReactNode;
  extraEl?: React.ReactNode;
  inputs: React.ReactNode;
  buttons: React.ReactNode;
};

export const AuthFormLayout = (props: AuthFormLayoutProps) => {
  return (
    <div className={st.form_layout}>
      {props.beforeEl && <div>{props.beforeEl}</div>}
      <div className={st.els_wrap}>{props.inputs}</div>
      <div className={st.els_wrap}>{props.buttons}</div>
    </div>
  );
};
