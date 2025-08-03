const arr = [1, 23, 432, 65, 3545, 7, 8, 9, 12, 23, 43, 51, 65, 90];
const sortArray = arr.sort((a, b) => a - b);

const binarySearch = (arr, target) => {
  let first = 0;
  let last = sortArray.length - 1;
  console.log(arr);
  while (first <= last) {
    let mid = Math.floor((first + last) / 2);
    if (target === arr[mid]) {
      return mid;
    } else if (target < arr[mid]) {
      last = mid - 1;
    } else {
      first = mid + 1;
    }
  }
  return -1;
};

const result = binarySearch(sortArray, 9);

console.log(result);
