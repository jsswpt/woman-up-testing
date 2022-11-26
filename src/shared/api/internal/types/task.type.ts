export type Task = {
  id: number;
  categoryId: number;
  title: string;
  creationDate: Date;
  deadline: Date;
  files: File[] | null;
};
