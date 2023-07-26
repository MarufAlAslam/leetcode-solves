/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function uglyNumber(n){
    if (n <= 0) {
        return false;
    }
    const keepDividingWhenDivisible = (dividend, divisor) => {
        while (dividend % divisor == 0) {
            dividend /= divisor;
        }
        return dividend;
    }
    for (const factor of [2, 3, 5]) {
        n = keepDividingWhenDivisible(n, factor);
    }
    return n == 1;
}