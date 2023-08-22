function sumOfUniqueElement(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    let isUnique = true;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j] && i !== j) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      sum += nums[i];
    }
  }
  return sum;
}

console.log(sumOfUniqueElement([1, 2, 3]));
