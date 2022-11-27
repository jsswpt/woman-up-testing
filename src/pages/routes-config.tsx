import { getCategoriesFx } from "entities/categories";
import { setCurrentCategory, setCurrentTasks } from "entities/tasks";
import React, { Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { routePaths } from "shared/api/internal/consts/route-paths";

const AuthLayout = React.lazy(() => import("./auth-layout/auth-layout"));
const AuthHomePage = React.lazy(() => import("./auth-home/auth-home"));
const SignInPage = React.lazy(() => import("./sign-in-page/sign-in-page"));
const SignUpPage = React.lazy(() => import("./sign-up-page/sign-up-page"));

const AppLayout = React.lazy(() => import("./app-layout/app-layout"));
const HomePage = React.lazy(() => import("pages/home-page/home-page"));
const CategoryPage = React.lazy(
  () => import("pages/category-page/category-page")
);
const TaskPage = React.lazy(() => import("pages/task-page/task-page"));

export const publicRoutes = createBrowserRouter([
  {
    path: routePaths.public.APP,
    element: <AuthLayout />,
    children: [
      { path: routePaths.public.HOME, element: <AuthHomePage /> },
      { path: routePaths.public.SIGN_IN, element: <SignInPage /> },
      { path: routePaths.public.SIGN_UP, element: <SignUpPage /> },
      { path: "*", element: <div>Страницы не существует</div> },
    ],
  },
  { path: "*", element: <div>Страницы не существует</div> },
]);

export const privateRoutes = createBrowserRouter([
  {
    path: routePaths.public.APP,
    element: <AppLayout />,
    errorElement: <>error</>,
    children: [
      {
        path: routePaths.private.HOME,
        element: <HomePage />,
        errorElement: <>error home</>,
      },
      {
        path: routePaths.private.CATEGORY + ":categoryId",
        element: <CategoryPage />,
        loader: (args) => {
          const { categoryId } = args.params;
          setCurrentCategory(categoryId!);
        },
        errorElement: <>error category</>,
      },
      {
        path: routePaths.private.TASK + ":taskId",
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
