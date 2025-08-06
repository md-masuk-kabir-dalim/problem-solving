const singleNumber = (nums) => {
  let result = 0;
  for (let num of nums) {
    result ^= num;
  }
  return result;
};

const result = singleNumber([4, 2, 2, 1, 1, 3, 3]);
console.log(result);
