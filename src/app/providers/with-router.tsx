import React from "react";
import { BrowserRouter } from "react-router-dom";

/**
 * Оборачивает приложение в роутер
 */
export const withRouter = (component: () => React.ReactNode) => () => {
  return <BrowserRouter>{component()}</BrowserRouter>;
};
