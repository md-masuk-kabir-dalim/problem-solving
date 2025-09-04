const input = Array(1000).fill(2);
const sumOfNumberFast = (arr) => {
  return helperSum(arr, 0);
};

const helperSum = (arr, index) => {
  if (arr.length === index) return 0;
  const result = arr[index] + helperSum(arr, index + 1);
  return result;
};

const sumOfNumberSlow = (arr) => {
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    sum += arr[i];
  }
  return sum;
};

const start = new Date();
const fastResult = sumOfNumberFast(input);
const end = new Date();
console.log(fastResult, "fast result", end - start + "ms");

const slowStart = new Date();
const slowResult = sumOfNumberSlow(input);
const slowEnd = new Date();
console.log(slowResult, "slow result", slowEnd - slowStart + "ms");
