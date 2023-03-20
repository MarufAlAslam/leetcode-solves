function firstLast(nums, target) {
  if (nums.includes(target)) {
    return [nums.indexOf(target), nums.lastIndexOf(target)];
  } else {
    return [-1, -1];
  }
}

console.log(firstLast([5, 7, 7, 8, 8, 10], 8));
