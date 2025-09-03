const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const result = isPrime(23);
console.log(result);

const isPrimeArray = (n) => {
  let sortArray = n.sort((a, b) => a - b);
  for (let i = 0; i < sortArray.length; i++) {
    const p = sortArray[i];
    if (p > 2) {
      continue;
    }
    sortArray = sortArray.filter((x) => x === p || x % p !== 0);
  }
  return sortArray;
};

const result2 = isPrimeArray([2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(result2);
