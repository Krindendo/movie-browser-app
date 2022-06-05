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

const formatDate = (date) => {
  if (date && Object.prototype.toString.call(date) === "[object Date]") {
    return `${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}.`;
  }
  return "00.00.0000";
};

export default formatDate;
