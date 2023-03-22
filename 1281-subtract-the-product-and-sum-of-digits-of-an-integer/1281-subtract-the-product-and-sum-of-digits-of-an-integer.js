/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function subProductSum(n) {
  const numArray = n.toString().split("");
  let sum = 0;
  let mul = 1;

  for (let i = 0; i < numArray.length; i++) {
    sum = sum + parseInt(numArray[i]);
    mul = mul * parseInt(numArray[i]);
  }

  return mul - sum;
}