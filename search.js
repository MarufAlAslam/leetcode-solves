function search(nums, target) {
  let flag = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      flag = true;
      return i;
    }
  }

  if (!flag) {
    return -1;
  }
}

console.log(search([-1, 0, 3, 5, 9, 12], 2));
