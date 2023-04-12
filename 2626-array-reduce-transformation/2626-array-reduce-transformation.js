/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function arrayReducer(arr, fn, init) {
    let result = init;
    for (let i = 0; i < arr.length; i++) {
        result = fn(result, arr[i]);
    }
    return result;
}

function sum(a, b) {
    return a + b;
}