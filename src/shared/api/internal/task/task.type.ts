export type Task = {
  id: string;
  categoryId: string;
  title: string;
  description: string | null;
  creationDate: Date;
  deadline: Date;
  files: File[] | null;
};
