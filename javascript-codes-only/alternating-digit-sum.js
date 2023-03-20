function alternatingDigitSum(num) {
  const numArray = [];
  let sum = 0;
  num = num.toString().split("");
  for (let i = 0; i < num.length; i++) {
    numArray.push(parseInt(num[i]));
  }

  for (let i = 0; i < numArray.length; i++) {
    if (i % 2 === 0) {
      sum = sum + numArray[i];
    } else {
      sum = sum - numArray[i];
    }
  }
  return sum;
}

console.log(alternatingDigitSum(886996));
