export const toExcluded = (array, elementName) => {
  const idx = array.findIndex((element) => element === elementName);
  return array.toSpliced(idx, 1);
};

export const stringifyWithFirstCapitalLetter = (data) => {
  const stringifiedData = String.prototype.toString(data);
  const firstCapitalLetter = String.prototype.toUpperCase(stringifiedData[0]);
  return `${firstCapitalLetter}${stringifiedData.slice(1)}`;
};
