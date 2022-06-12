import isObject from "utils/isObject";

const Date = (string) => {
  const date = new Date(string);
  if (isObject.Date(date)) {
    return `${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}.`;
  }
  return "00.00.0000";
};

const format = {
  Date
};

export default format;

const months = [
  "januar",
  "februar",
  "mart",
  "april",
  "maj",
  "jun",
  "jul",
  "avgust",
  "septembar",
  "oktobar",
  "novembar",
  "decembar"
];
