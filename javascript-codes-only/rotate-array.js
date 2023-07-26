function rotateArray(nums, k) {
  k %= nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);

function reverse(nums, start, end) {
  while (start < end) {
    const temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}

  return nums;
}

// console.log(rotateArray([1,2,3,4,5,6,7], 3))
console.log(rotateArray([1, 2], 3));
