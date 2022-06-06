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

const formatDate = (string) => {
  const date = new Date(string);
  // bolje proveriti date
  if (date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)) {
    return `${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}.`;
  }
  return "00.00.0000";
};

export default formatDate;
