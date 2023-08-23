/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function(nums, lower, upper) {
  let n = nums.length, pairs = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n - 1; i++) {
    let lowerBound = lower_bound(i); 
    let upperBound = upper_bound(i);
    pairs += Math.max(0, upperBound - lowerBound + 1);
  }
  return pairs;
  
  function lower_bound(i) {
    // Find smallest index j where nums[i] + nums[j] >= lower
    let low = i + 1, high = n - 1;
    while (low < high) {
      let mid = Math.floor((low + high) / 2);
      if (nums[mid] + nums[i] >= lower) high = mid;
      else low = mid + 1;
    }
    return nums[low] + nums[i] >= lower ? low : n;
  }
  
  function upper_bound(i) {
    // Find largest index j where nums[i] + nums[j] <= upper
    let low = i + 1, high = n - 1;
    while (low < high) {
      let mid = Math.ceil((low + high) / 2);
      if (nums[mid] + nums[i] <= upper) low = mid;
      else high = mid - 1;
    }
    return nums[low] + nums[i] <= upper ? low : i;
  }
};