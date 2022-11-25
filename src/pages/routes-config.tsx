import React, { Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { routePaths } from "shared/api/internal/consts/route-paths";
import { AppLayout } from "./app-layout/app-layout";

const HomePage = React.lazy(() => import("pages/home-page/home-page"));
const CategoryPage = React.lazy(
  () => import("pages/category-page/category-page")
);
const TaskPage = React.lazy(() => import("pages/task-page/task-page"));

export const publicRoutes = createBrowserRouter([
  {
    path: routePaths.public.APP,
    element: <AppLayout />,
    errorElement: <>error</>,
    children: [
      {
        path: routePaths.public.HOME,
        element: <HomePage />,
        errorElement: <>error home</>,
      },
      {
        path: routePaths.public.CATEGORY + ":categoryId",
        element: <CategoryPage />,
        errorElement: <>error category</>,
      },
      {
        path: routePaths.public.TASK + ":taskId",
        element: <TaskPage />,
        errorElement: <>error task</>,
      },
      {
        path: "*",
        action: (arg) => {
          console.log(arg);
        },
        loader: (arg) => {
          // Не думаю, что это нужно реализовывать именно таким образом,
          // но, пока что, пусть будет так

          setTimeout(() => {
            window.location.href = "http://localhost:3000/";
          }, 5000);
          console.log(arg);
        },
        element: <div>Страницы не существует</div>,
      },
    ],
  },
  {
    path: "*",
    element: <div>Страницы не существует</div>,
  },
]);
