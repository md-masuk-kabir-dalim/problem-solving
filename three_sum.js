function threeSum(nums) {
  const lastIndex = nums.length - 1;
  const result = [];
  const sortNums = nums.sort((a, b) => a - b);
  for (let i = 0; i < sortNums.length; i++) {
    if (i > 0 && sortNums[i] === sortNums[i - 1]) continue;
    let first = i + 1;
    let last = lastIndex;

    while (first < last) {
      const sum = sortNums[i] + sortNums[first] + sortNums[last];

      if (sum === 0) {
        result.push([sortNums[first], sortNums[last], sortNums[i]]);
        first++;
        last--;
        while (first < last && nums[first] === nums[first - 1]) first++;
        while (first < last && nums[last] === nums[last + 1]) last--;
      } else if (sum < 0) {
        first++;
      } else {
        last--;
      }
    }
  }
  return result;
}

const result = threeSum([-1, 0, 1, 2, -1, -4]);
console.log(result);
