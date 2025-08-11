/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] += 1;
    if (digits[i] < 10) {
      return digits;
    }
    digits[i] = 0;
  }
  console.log(digits)
  digits.unshift(1);

  return digits;
};

const result = plusOne([9, 9, 9]);
console.log(result);

[1, 8, 9];
