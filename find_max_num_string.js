const arrValue = [3,30,34,5,9]

function findMaxNumberToString(arr) {
  const strNums = arr
    .join("")
    .split("")
    .sort((a, b) => (b + a) - (a + b))
    .join("");
  return strNums;
}

const result = findMaxNumberToString(arrValue);
console.log(result);