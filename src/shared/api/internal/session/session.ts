import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "shared/api/firebase/config";
import { getDoc, setDoc } from "shared/api/firebase/firebase-service";
import { firebaseSheets } from "../consts/firebase-sheets";
import { CreateAccount, SessionType } from "./session.type";

export const createAccount = async (data: CreateAccount) => {
  const { user } = await createUserWithEmailAndPassword(
    auth,
    data.email,
    data.password
  );

  const userLayout: SessionType = {
    email: data.email,
    id: user.uid,
    username: data.username,
  };

  await setDoc(firebaseSheets.USERS, user.uid, userLayout);

  return userLayout;
};

export const getUserAccount = async (userId: string) => {
  try {
    const resp = await getDoc(firebaseSheets.USERS, userId);

    return resp.data() as SessionType;
  } catch (error: any) {
    throw new Error(error);
  }
};
