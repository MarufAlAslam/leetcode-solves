/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function rotateArray(nums, k) {
  // Account for all possible k values
  k %= nums.length;
  // Rotate all the numbers
  reverse(nums, 0, nums.length - 1);
  // Rotate first k numbers
  reverse(nums, 0, k - 1);
  // Rotate number from k onward
  reverse(nums, k, nums.length - 1);

// Function to rotate the array from params start to end
function reverse(nums, start, end) {
  while (start < end) {
    const temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}
}