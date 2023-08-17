function findTargetIndices(nums, target) {
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

console.log(
  findTargetIndices(
    [
      48, 90, 9, 21, 31, 35, 19, 69, 29, 52, 100, 54, 21, 86, 6, 45, 42, 5, 62,
      77, 15, 38,
    ],
    6
  )
);
