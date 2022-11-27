export type Task = {
  id: number;
  categoryId: number;
  title: string;
  description: string | null;
  creationDate: Date;
  deadline: Date;
  files: File[] | null;
};
