/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function selfDevidingNums(left, right) {
  return Array.from({ length: right - left + 1 }, (v, i) => i + left).filter(
    (num) => {
      return num
        .toString()
        .split("")
        .every((digit) => num % parseInt(digit) === 0);
    }
  );
}