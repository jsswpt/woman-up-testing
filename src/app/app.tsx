import { Routing } from "pages/routing";
import { withProviders } from "./providers/with-providers";
import "./index.scss";

export const App = withProviders(() => {
  return <Routing />;
});
