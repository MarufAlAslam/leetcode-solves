/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function heighestAltitude(gain) {
  const altitudes = [0];
  let index = 0;
  for (i = 0; i < gain.length; i++) {
    altitudes.push(altitudes[index] + gain[i]);
    index++;
  }
  return Math.max(...altitudes);
}