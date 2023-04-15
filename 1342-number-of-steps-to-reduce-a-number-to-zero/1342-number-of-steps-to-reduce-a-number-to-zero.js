/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function stepsToZero(n) {
    let count = 0

    while (n) {
        if (n % 2 === 0) {
            n = n / 2
            count++
        }
        else {
            n = n - 1
            count++
        }
    }

    return count
}