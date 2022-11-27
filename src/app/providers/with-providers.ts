import compose from "compose-function";
import { withAuth } from "./with-auth";
import { withFirebase } from "./with-firebase";

/**
 * композирует хоки в один
 */
export const withProviders = compose(withAuth, withFirebase);
