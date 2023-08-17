/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function findTargetIndices(nums, target) {
  const indices = [];
  nums.sort((a, b) => a - b);
  for (let i in nums) {
    if (nums[i] === target) {
      indices.push(parseInt(i));
    }
  }
  console.log(nums);
  return indices;
}