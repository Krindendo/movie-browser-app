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
]

export const formatDate = (date) => {
  if (date) {
    return `${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}.`
  } else {
    return "00.00.0000"
  }
}
