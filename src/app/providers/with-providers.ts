import compose from "compose-function";
import { withFirebase } from "./with-firebase";
import { withRouter } from "./with-router";

/**
 * композирует хоки в один
 */
export const withProviders = compose(withFirebase, withRouter);
