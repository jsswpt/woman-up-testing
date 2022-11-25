import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { publicRoutes } from "./routes-config";

export const Routing = () => {
  return (
    <RouterProvider router={publicRoutes} fallbackElement={<>Loading...</>} />
  );
};
