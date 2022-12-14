import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getEnvVar } from "shared/lib/get-env-var/get-env-var";

const firebaseConfig = {
  apiKey: getEnvVar("REACT_APP_API_KEY"),
  authDomain: getEnvVar("REACT_APP_AUTH_DOMAIN"),
  projectId: getEnvVar("REACT_APP_PROJECT_ID"),
  storageBucket: getEnvVar("REACT_APP_STORAGE_BUCKET"),
  messagingSenderId: getEnvVar("REACT_APP_MESSAGING_SENDER_ID"),
  appId: getEnvVar("REACT_APP_APP_ID"),
};

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);

export const auth = getAuth(app);
