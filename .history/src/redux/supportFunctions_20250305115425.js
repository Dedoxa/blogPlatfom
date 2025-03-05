export const toExcluded = (array, elementName) => {
  const idx = array.findIndex((element) => element === elementName);
  return array.toSpliced(idx, 1);
};

export const stringifyWithFirstCapitalLetter = (data) => {
  const stringifiedData = String.prototype.toString(data);
  return `${stringifiedData}`;
}