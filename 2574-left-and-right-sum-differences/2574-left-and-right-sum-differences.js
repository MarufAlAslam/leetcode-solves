/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function leftRightSum(arr) {
    let leftSum = 0;
    let rightSum = 0;
    let leftSumArr = [];
    let rightSumArr = [];
    let res = []

    leftSumArr[0] = 0;
    rightSumArr[arr.length - 1] = 0;

    for (let i = 1; i < arr.length; i++) {
        leftSum += arr[i - 1];
        leftSumArr[i] = leftSum;
    }

    for (let i = arr.length - 2; i >= 0; i--) {
        rightSum += arr[i + 1];
        rightSumArr[i] = rightSum;
    }

    for (let i = 0; i < arr.length; i++) {
        res[i] = Math.abs(leftSumArr[i] - rightSumArr[i])
    }

    return res
}