const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return true;
    }
  }
  return false;
};

const result = isPrime(23);
console.log(result);
