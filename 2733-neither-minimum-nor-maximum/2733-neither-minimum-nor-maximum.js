/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function neitherMinNorMax(nums) {
    let result = -1;
    let newArray = nums.filter((num) => {
        return num !== Math.max(...nums) && num !== Math.min(...nums);
    });

    if (newArray.length > 0) {
        result = Math.min(...newArray);
    }

    return result;
}