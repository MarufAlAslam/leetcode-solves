function addDigits(num) {
  let numToString = num.toString().split("");
  let sum = 0;
  for (let i = 0; i < numToString.length; i++) {
    sum = sum + parseInt(numToString[i]);
  }
  if (sum.toString().length > 1) {
    return addDigits(sum);
  }
  return sum;
}

console.log(addDigits(38));
