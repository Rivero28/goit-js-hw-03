function makeArray(firstArray, secondArray, maxLength) {
  const thirdArray = firstArray.concat(secondArray);
  if (thirdArray.length > maxLength) {
    return thirdArray.slice(0, maxLength);
  } else return thirdArray;
}
