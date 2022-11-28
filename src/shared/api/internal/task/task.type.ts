export type Task = {
  id: string;
  categoryId: string;
  title: string;
  description: string | null;
  creationDate: Date;
  deadline: Date;
  isDone: boolean;
  files: File[] | null;
};
