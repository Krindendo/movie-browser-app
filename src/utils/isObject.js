const Empty = (object) => {
  return object && Object.keys(object).length === 0 && Object.getPrototypeOf(object) === Object.prototype;
};

const DateTime = (object) => {
  // bolje proveriti date
  return object && Object.prototype.toString.call(object) === "[object Date]" && !isNaN(object);
};

const isObject = {
  Empty,
  DateTime
};

export default isObject;
