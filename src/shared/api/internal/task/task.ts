import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { firestore, storage } from "shared/api/firebase/config";
import { deleteDoc, setDoc } from "shared/api/firebase/firebase-service";
import { Category } from "../category/category.type";
import { firebaseSheets } from "../consts/firebase-sheets";
import { Task, TaskBase, TaskFromFirebase } from "./task.type";

interface AddTaskType extends TaskBase<Date, File | null> {}
export const addTask = async (data: AddTaskType) => {
  try {
    let link = "";
    if (data.file) {
      const fileRef = ref(storage, `/files/${data.id}/${data.file.name}`);
      await uploadBytes(fileRef, data.file);
      link = await getDownloadURL(fileRef);
    }

    await setDoc(firebaseSheets.TASKS, data.id, { ...data, file: link });
    return { ...data, file: link };
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getTasks = async (categoryId: string) => {
  try {
    const tasksQuery = query(
      collection(firestore, firebaseSheets.TASKS),
      where("categoryId", "==", categoryId)
    );

    const tasksResp = await getDocs(tasksQuery);
    const tasksSnap = tasksResp.docs.map((item) =>
      item.data()
    ) as TaskFromFirebase[];

    const finalTasks: Task[] = tasksSnap.map((task) => {
      const creationDate = task.creationDate.toDate();
      const deadline = task.deadline.toDate();

      return { ...task, creationDate, deadline };
    });

    return finalTasks;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const editTask = async (data: Task) => {
  try {
    await setDoc(firebaseSheets.TASKS, data.id, data);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const removeTask = async (taskId: string) => {
  try {
    await deleteDoc(firebaseSheets.TASKS, taskId);
    return taskId;
  } catch (error: any) {
    throw new Error(error);
  }
};
