/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function arraySuffle(arr, n) {
    const arrX = arr.slice(0, n)
    const arrY = arr.slice(n, arr.length)

    const result = []


    for (let i = 0; i < n; i++) {
        result.push(arrX[i])
        result.push(arrY[i])
    }
    return result
}