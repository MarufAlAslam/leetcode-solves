/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function thirdMaxNum(nums){
    nums = [...new Set(nums)]
    if(nums.length < 3){
        return Math.max(...nums);
    }
    else{
        
        nums = nums.sort((a,b) => a-b)
        // console.log(nums)
        nums.pop()
        nums.pop()
        return nums.pop()
    }
}