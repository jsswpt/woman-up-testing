export type Filter<ROOT> = {
  id: string;
  type: string;
  controversy: string;
  filterer: (item: ROOT) => boolean;
};
