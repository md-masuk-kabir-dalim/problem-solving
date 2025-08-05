/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let result = [];
  for (let i = 0; i < m; i++) {
    result.push(nums1[i]);
  }
  for (let j = 0; j < n; j++) {
    result.push(nums2[j]);
  }
  result.sort((a, b) => a - b);
  for (let r = 0; r < result.length; r++) {
    nums1[r] = result[r];
  }

  return nums1;
};

(nums1 = [1, 2, 3, 0, 0, 0]), (m = 3), (nums2 = [2, 5, 6]), (n = 3);
const result = merge(nums1, m, nums2, n);
console.log(result);
