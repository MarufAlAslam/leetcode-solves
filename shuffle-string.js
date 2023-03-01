function shuffleString(str, positions) {
  let resultArray = [];
  let splittedStr = str.split("");
  for (let i = 0; i < str.length; i++) {
    const index = positions[i];
    resultArray[index] = splittedStr[i];
  }

  return resultArray.join("");
}

console.log(shuffleString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
