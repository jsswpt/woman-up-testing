import compose from "compose-function";
import { withFirebase } from "./with-firebase";

/**
 * композирует хоки в один
 */
export const withProviders = compose(withFirebase);
