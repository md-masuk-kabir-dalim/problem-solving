const oddNumber = (arr) => {
  const result = helper(arr, 0, []);
  return result;
};

const helper = (arr, index, result) => {
  if (arr.length === index) {
    return result;
  }
  const currentNumber = arr[index];
  const divide = currentNumber % 2;
  if (divide !== 0) {
    result.push(currentNumber);
  }

  return helper(arr, index + 1, result);
};

console.log(oddNumber([1, 2, 3, 4, 5, 6]));
