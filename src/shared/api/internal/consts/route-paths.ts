const privateRoutes = {
  APP: "/",
  HOME: "",
  CATEGORY: "category/",
  TASK: "task/",
};

const privateNavigation = {
  HOME: `${privateRoutes.APP}${privateRoutes.HOME}`,
  CATEGORY: `${privateRoutes.APP}${privateRoutes.CATEGORY}`,
  TASK: `${privateRoutes.APP}${privateRoutes.TASK}`,
};

const publicRoutes = {
  APP: "/",
  HOME: "",
  SIGN_IN: "sign-in",
  SIGN_UP: "sign-up",
};

const publicNavigation = {
  HOME: `${publicRoutes.APP}${publicRoutes.HOME}`,
  SIGN_IN: `${publicRoutes.APP}${publicRoutes.SIGN_IN}`,
  SIGN_UP: `${publicRoutes.APP}${publicRoutes.SIGN_UP}`,
};

export const routePaths = {
  private: privateRoutes,
  privateNavigation,
  public: publicRoutes,
  publicNavigation,
};
