const nums = [1, 3, 5, 6];
const target = 4;

function searchInsert(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
    if (nums[i] >= target) {
      console.log(nums[i]);
      return i;
    }
    return nums.length;
  }
}

const result = searchInsert(nums, target);
// console.log(result);
