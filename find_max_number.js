const arr = [1, 3, 4, 5, 6, 90, 7, 89];

function findMaxNumber(arr) {
  let max = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

const result = findMaxNumber(arr);
console.log(result);
