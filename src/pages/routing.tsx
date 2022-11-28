import { useStore } from "effector-react";
import { $isAuthorized } from "entities/session";
import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { Loader } from "shared/ui/loader/loader";
import { privateRoutes, publicRoutes } from "./routes-config";

export const Routing = () => {
  const isAuthorized = useStore($isAuthorized);

  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={isAuthorized ? privateRoutes : publicRoutes} />
    </Suspense>
  );
};
