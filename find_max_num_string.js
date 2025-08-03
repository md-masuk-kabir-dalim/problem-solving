const arrValue = [3,30,34,5,9]

function findMaxNumberToString(arr) {
  const strNums = arr
    .join("")
    .split("")
    .sort((a, b) => (a > b ? -1 : 1))
    .join("");
  return strNums;
}

const result = findMaxNumberToString(arrValue);
console.log(result);
