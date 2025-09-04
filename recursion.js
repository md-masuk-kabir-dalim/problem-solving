const sumOfNumber = (n) => {
  if (n < 0) return 0;

  console.log("Before call:", n); 
  const result = n + sumOfNumber(n - 1);
  console.log("After call:", n, "=>", result);
  return result;
};

console.log("Final:", sumOfNumber(3));
