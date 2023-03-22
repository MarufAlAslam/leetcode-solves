/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function smallestMultiple(n) {
  for (let i = n; ; i++) {
    if (i % n === 0 && i % 2 === 0) {
      return i;
    }
  }
}