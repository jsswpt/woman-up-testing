const getRandomInt = (max: number, min: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const getRandomId = () => {
  const id = [];
  const letters = "qwertyuiopasdfghjklzxcvbnm";

  for (let i = 0; i < 16; i++) {
    if (getRandomInt(2, 0) === 1) {
      if (getRandomInt(2, 0) === 1) {
        id.push(letters[getRandomInt(letters.length, 0)].toUpperCase());
      } else {
        id.push(letters[getRandomInt(letters.length, 0)]);
      }
    } else {
      id.push(getRandomInt(9, 0));
    }
  }

  return id.join("");
};
