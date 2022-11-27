import { Routing } from "pages/routing";
import { withProviders } from "./providers/with-providers";
import "./index.scss";
import { useStore } from "effector-react";
import { $isGetted } from "entities/session";
import { Loader } from "shared/ui/loader/loader";

export const App = withProviders(() => {
  const isGetted = useStore($isGetted);
  if (isGetted) {
    return <Routing />;
  } else {
    return <Loader />;
  }
});
