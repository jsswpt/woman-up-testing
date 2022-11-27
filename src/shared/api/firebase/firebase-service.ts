import {
  setDoc as firebaseSetDoc,
  getDoc as firebaseGetDoc,
  doc,
  WithFieldValue,
  DocumentData,
} from "firebase/firestore";
import { firebaseSheets } from "../internal/consts/firebase-sheets";
import { firestore } from "./config";

export const getDoc = async (table: string, row: string) => {
  return await firebaseGetDoc(doc(firestore, table, row));
};

export const setDoc = async (
  table: string,
  row: string,
  data: WithFieldValue<DocumentData>
) => {
  return await firebaseSetDoc(doc(firestore, table, row), data);
};
