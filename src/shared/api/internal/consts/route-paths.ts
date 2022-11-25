const publicRoutes = {
  APP: "/",
  HOME: "",
  CATEGORY: "category/",
  TASK: "task/",
};

const publicNavigation = {
  HOME: `${publicRoutes.APP}${publicRoutes.HOME}`,
  CATEGORY: `${publicRoutes.APP}${publicRoutes.CATEGORY}`,
  TASK: `${publicRoutes.APP}${publicRoutes.TASK}`,
};

export const routePaths = {
  public: publicRoutes,
  publicNavigation,
};
