/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function countDigit(num) {
  const numArray = num.toString().split("");
  let count = 0;
  for (let i = 0; i < numArray.length; i++) {
    if (num % parseInt(numArray[i]) === 0) {
      count++;
    }
  }
  return count;
}