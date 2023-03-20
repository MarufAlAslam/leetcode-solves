function plus(digits) {
  let result;
  let numberString = digits.join("");
  let number = BigInt(numberString);
  result = number + BigInt(1);

  result = result.toString().split("");
  for (let i = 0; i < result.length; i++) {
    result[i] = parseInt(result[i]);
    // console.log(result[i]);
  }
  return result;
}

console.log(plus([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
