import { getDoc } from "shared/api/firebase/firebase-service";
import { firebaseSheets } from "../consts/firebase-sheets";
import { Category } from "./category.type";

export const getCategories = async (userId: string) => {
  try {
    const resp = await getDoc(firebaseSheets.CATEGORIES, userId);

    const data = resp.data();
    return data as Category[];
  } catch (error: any) {
    throw new Error(error);
  }
};
