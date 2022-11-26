import dayjs from "dayjs";

export const dateFormatter = (date: Date, symbol?: string) => {
  let day = dayjs(date).date();
  let month = dayjs(date).month() + 1;
  let year = dayjs(date).year();

  let divider = symbol || ".";

  return `${day < 10 ? `0${day}` : day}${divider}${
    month < 10 ? `0${month}` : month
  }${divider}${year}`;
};
