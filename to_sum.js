function toSum(arr, target) {
  console.time("time first");
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const element2 = arr[j];
      const element1 = arr[i];
      if (element1 + element2 === target) {
        console.timeEnd("time first");
        return [i, j];
      }
    }
  }
}

function toSumPointer(arr, target) {
  console.time("sce");
  const sortArr = arr.sort((a, b) => a - b);
  let first = 0;
  let last = sortArr.length - 1;
  while (first < last) {
    let sum = sortArr[first] + sortArr[last];
    if (sum === target) {
      return [first, last];
    } else if (sum > target) {
      last--;
    } else {
      first++;
    }
  }
  console.log(first, last);
}

const result = toSum([12, 34, 6, 7, 2, 8], 9);
const result2 = toSumPointer([12, 34, 6, 7, 2, 8], 9);

console.log(result2);
