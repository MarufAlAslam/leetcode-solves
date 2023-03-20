function detectCapital(str) {
  const strArray = str.split("");
  let flag = 0;

  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] >= "A" && strArray[i] <= "Z") {
      flag++;
    } else if (strArray[0] >= "A" && strArray[0] <= "Z") {
      flag = 1;
    } else if (strArray[i] >= "a" && strArray[i] <= "z") {
      flag = 1;
    } else {
      flag = 0;
    }
  }

  if (flag === 1) {
    return true;
  }
  return false;
}

console.log(detectCapital("FlaG"));
