/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function kthLargestElement(nums, k){

        nums = nums.sort((a,b) => a-b)
        // console.log(nums)
        for(let i=0; i<k-1; i++){
            nums.pop()
        }
        return nums.pop()
}