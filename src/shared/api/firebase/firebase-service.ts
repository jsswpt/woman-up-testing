import {
  setDoc as firebaseSetDoc,
  getDoc as firebaseGetDoc,
  getDocs as firebaseGetDocs,
  deleteDoc as firebaseDeleteDoc,
  doc,
  WithFieldValue,
  DocumentData,
  collection,
} from "firebase/firestore";
import { firebaseSheets } from "../internal/consts/firebase-sheets";
import { firestore } from "./config";

export const getDoc = async (table: string, row: string) => {
  return await firebaseGetDoc(doc(firestore, table, row));
};

export const getDocs = async (table: string) => {
  return await firebaseGetDocs(collection(firestore, table));
};

export const setDoc = async (
  table: string,
  row: string,
  data: WithFieldValue<DocumentData>
) => {
  return await firebaseSetDoc(doc(firestore, table, row), data);
};

export const deleteDoc = async (table: string, row: string) => {
  return await firebaseDeleteDoc(doc(firestore, table, row));
};
