export const hello = () => "Hello";

export const add = (x, y) => {
  if (typeof x !== "number" || typeof y !== "number") {
    return null;
  }
  return x + y;
};

export const onlyFourCharWords = arr => {
  return arr.map(word => {
    if (word.length <= 4) return word;
  });
};

export const truncate = (str, n) => {
  return str.slice(0, n);
};
