import React, { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "shared/api/firebase/config";
import { getUserAccountFx, toggleIsGetted } from "entities/session";

export const withAuth = (component: () => React.ReactNode) => () => {
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        await getUserAccountFx(user.uid);
      } else {
        toggleIsGetted(true);
      }
    });
  }, []);
  return <>{component()}</>;
};
