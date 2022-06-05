const isObjectEmpty = (object) => {
  return object && Object.keys(object).length === 0 && Object.getPrototypeOf(object) === Object.prototype;
};

export default isObjectEmpty;
