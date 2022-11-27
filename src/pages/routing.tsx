import { useStore } from "effector-react";
import { $isAuthorized } from "entities/session";
import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes-config";

export const Routing = () => {
  const isAuthorized = useStore($isAuthorized);
  return (
    <Suspense fallback={<>Loading...</>}>
      <RouterProvider router={isAuthorized ? privateRoutes : publicRoutes} />
    </Suspense>
  );
};
