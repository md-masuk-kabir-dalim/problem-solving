const sumOfNumberFast = (n) => {
  if (n < 0) return 0;
  const result = n + sumOfNumberFast(n - 1);
  return result;
};

const sumOfNumberSlow = (n) => {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    console.log(i);
    sum += i;
  }
  return sum;
};

const start = new Date();
const fastResult = sumOfNumberFast(1000);
const end = new Date();
console.log(fastResult, "fast result", end - start + "ms");

const slowStart = new Date();
const slowResult = sumOfNumberSlow(1000);
const slowEnd = new Date();
console.log(slowResult, "slow result", slowEnd - slowStart + "ms");
