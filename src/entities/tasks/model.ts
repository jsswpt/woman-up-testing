import { createEvent, createStore, sample } from "effector";
import { Filter } from "shared/api/internal/types/filter.type";
import { Task } from "shared/api/internal/task/task.type";

/**
 * Хранит в себе все таски
 */
export const $tasks = createStore<Task[]>([
  {
    isDone: true,
    categoryId: "anyid",
    creationDate: new Date("2022-11-25"),
    deadline: new Date("2022-12-11"),
    files: null,
    id: "1",
    title: "Покормить кота",
    description: `Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.`,
  },
  {
    isDone: false,
    categoryId: "anyid",
    creationDate: new Date("2022-11-26"),
    deadline: new Date("2022-12-13"),
    files: null,
    id: "2",
    title: "Покормить пса",
    description: `Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.`,
  },
  {
    isDone: true,
    categoryId: "anyid",
    creationDate: new Date("2022-11-26"),
    deadline: new Date("2022-12-13"),
    files: null,
    id: "3",
    title: "Покормить енота",
    description: `Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.`,
  },
  {
    isDone: false,
    categoryId: "anyid",
    creationDate: new Date("2022-11-26"),
    deadline: new Date("2022-12-13"),
    files: null,
    id: "4",
    title: "Покормить хомяка",
    description: `Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.`,
  },
  {
    isDone: true,
    categoryId: "anyid2",
    creationDate: new Date("2022-11-25"),
    deadline: new Date("2022-12-11"),
    files: null,
    id: "5",
    title: "Покормить себя",
    description: `Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.`,
  },
  {
    isDone: false,
    categoryId: "anyid2",
    creationDate: new Date("2022-11-26"),
    deadline: new Date("2022-12-13"),
    files: null,
    id: "6",
    title: "Покормить брата",
    description: `Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.`,
  },
  {
    isDone: true,
    categoryId: "anyid2",
    creationDate: new Date("2022-11-26"),
    deadline: new Date("2022-12-13"),
    files: null,
    id: "7",
    title: "Сделать сальто",
    description: `Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.`,
  },
  {
    isDone: false,
    categoryId: "anyid2",
    creationDate: new Date("2022-11-26"),
    deadline: new Date("2022-12-13"),
    files: null,
    id: "8",
    title: "Сделать двойное сальто",
    description: `Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.`,
  },
]);

/**
 * Хранит в себе таски текущей категории
 */
export const $currentTasks = createStore<Task[]>([]);

/**
 * Хранит в себе отфильтрованные / отсортированные таски
 */
const $tempTasks = createStore<Task[]>([]);

/**
 * Хранит итоговый список тасок (если есть фильтры, то tempTasks, иначе currentTasks)
 */
export const $finalTasks = createStore<Task[]>([]);

/**
 * Хранит массив фильтров
 */
export const $filters = createStore<Filter<Task>[]>([]);

export const $currentCategory = createStore<string | null>(null);

export const addFilter = createEvent<Filter<Task>>();
const filterTasks = createEvent();

export const setCurrentCategory = createEvent<string>();
export const setCurrentTasks = createEvent();

sample({
  clock: setCurrentCategory,
  target: $currentCategory,
});

sample({
  clock: setCurrentCategory,
  target: setCurrentTasks,
});

/**
 * Устанавливает текущие задачи в зависимости от категории
 */
sample({
  clock: setCurrentTasks,
  source: { category: $currentCategory, tasks: $tasks },
  fn: ({ category, tasks }) => {
    return tasks.filter((item) => item.categoryId === category);
  },
  target: $currentTasks,
});

sample({
  clock: $tasks,
  fn: (tasks) => {
    console.log(tasks);
    return tasks;
  },
  target: setCurrentTasks,
});

sample({
  clock: $currentTasks,
  fn: (tasks) => {
    console.log("Финалные таски", tasks);
    return tasks;
  },
  target: $finalTasks,
});
