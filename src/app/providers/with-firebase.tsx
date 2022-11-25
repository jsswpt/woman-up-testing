import "shared/api/firebase/config";

/**
 * Подключает firebase к приложению
 */
export const withFirebase = (component: () => React.ReactNode) => () => {
  return <>{component()}</>;
};
