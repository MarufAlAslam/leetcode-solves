/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function maxSum(nums, k){
    let sum = 0
    let max = Math.max(...nums)
    const result = [max]
    for(let i = 1 ; i < k ; i++){
        max = max + 1
        result.push(max)
    }

    return result.reduce((acc, curr) => acc + curr, 0)
}