/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function goodPairs(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] && i < j) {
                count++
            }
        }
    }
    return count
}