function valueAfterOperation(strArray) {
  let result = 0;
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] === "++X") {
      ++result;
    }
    if (strArray[i] === "X++") {
      result++;
    }
    if (strArray[i] === "--X") {
      --result;
    }
    if (strArray[i] === "X--") {
      result--;
    }
  }

  return result;
}

console.log(valueAfterOperation(["++X", "++X", "X++"]));
