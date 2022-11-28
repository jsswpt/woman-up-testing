import { Timestamp } from "firebase/firestore";

export type TaskBase<DATET, FILET> = {
  id: string;
  categoryId: string;
  title: string;
  description: string | null;
  creationDate: DATET;
  deadline: DATET;
  isDone: boolean;
  file: FILET;
};

export interface Task extends TaskBase<Date, string | null> {}

export interface TaskFromFirebase extends TaskBase<Timestamp, string | null> {}
