import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "shared/api/firebase/config";
import {
  deleteDoc,
  getDoc,
  setDoc,
} from "shared/api/firebase/firebase-service";
import { firebaseSheets } from "../consts/firebase-sheets";
import { Category } from "./category.type";

export const getCategories = async (userId: string) => {
  const categoriesQuery = query(
    collection(firestore, firebaseSheets.CATEGORIES),
    where("ownerId", "==", userId)
  );

  const categoriesResp = await getDocs(categoriesQuery);
  const categoriesSnap = categoriesResp.docs.map((item) => item.data());

  return categoriesSnap as Category[];
};

export const addCategory = async (data: Category) => {
  try {
    await setDoc(firebaseSheets.CATEGORIES, data.id, data);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const editCategory = async (data: Category) => {
  try {
    await setDoc(firebaseSheets.CATEGORIES, data.id, data);
    return data;
  } catch (error: any) {
    console.log("error", error);
    throw new Error(error);
  }
};

export const removeCategory = async (categoryId: string) => {
  try {
    await deleteDoc(firebaseSheets.CATEGORIES, categoryId);
    return categoryId;
  } catch (error: any) {
    throw new Error(error);
  }
};
