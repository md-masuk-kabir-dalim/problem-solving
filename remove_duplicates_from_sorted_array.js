const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
function removeDuplicates(nums) {
  const set = new Set();
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i])) {
      set.add(nums[i]);
      nums[index] = nums[i];
      index++;
    }
  }
  for (let i = index; i < nums.length; i++) {
    nums[i] = "_";
  }
  return index;
}

const result = removeDuplicates(nums);

console.log(result, nums);
