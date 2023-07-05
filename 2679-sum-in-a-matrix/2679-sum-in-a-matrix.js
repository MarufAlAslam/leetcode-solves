/**
 * @param {number[][]} nums
 * @return {number}
 */
var matrixSum = function calculateScore(nums) {
    let score = 0;
  
    while (nums.length > 0) {
      let maxValue = -Infinity;
  
      for (let i = 0; i < nums.length; i++) {
        const row = nums[i];
        const maxInRow = Math.max(...row);
  
        if (maxInRow > maxValue) {
          maxValue = maxInRow;
        }
  
        const maxIndex = row.indexOf(maxInRow);
        row.splice(maxIndex, 1);
  
        if (row.length === 0) {
          nums.splice(i, 1);
          i--;
        }
      }
  
      score += maxValue;
    }
  
    return score;
  }