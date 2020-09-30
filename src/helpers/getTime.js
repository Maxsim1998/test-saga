export const formattingNumber = (num) => num < 10 ? `0${num}` : num;

export const getTime = (date) => {
  const hours = formattingNumber(date.getHours());
  const minutes = formattingNumber(date.getMinutes());
  const seconds = formattingNumber(date.getSeconds());
  return `${hours}:${minutes}:${seconds}`;
};
