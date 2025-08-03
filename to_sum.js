function toSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const element2 = arr[j];
      const element1 = arr[i];
      if (element1 + element2 === target) {
        return [i, j];
      }
    }
  }
}

const result = toSum([12, 34, 6, 7, 2, 8], 9);

console.log(result);
