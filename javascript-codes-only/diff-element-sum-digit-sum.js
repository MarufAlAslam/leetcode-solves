function diff(arr) {
  let elementSum = 0;
  let digitSum = 0;
  const arrStringToNum = arr.join("").split("");
  for (let i = 0; i < arr.length; i++) {
    elementSum = elementSum + arr[i];
  }
  for (let i = 0; i < arrStringToNum.length; i++) {
    digitSum = digitSum + parseInt(arrStringToNum[i]);
  }
  return elementSum - digitSum;
}

console.log(diff([1, 15, 6, 3]));
