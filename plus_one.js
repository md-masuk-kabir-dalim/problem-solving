/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const strArray = String(Number(digits.join("")) + 1).split("");
  const strNumber = strArray.map(Number);
  return strNumber;
};

const result = plusOne([1, 2, 3]);
console.log(result);
