/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function longestSubsequence(arr) {
    const flagArr = []
    let index = 1
    let sum = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1]) {
            sum += arr[i]
            index++
        }
        else {
            flagArr.push(index)
            index = 1
            sum = 0
        }
    }
    return Math.max(...flagArr)
}