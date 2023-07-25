function detectCapital(str) {
  const strArray = str.split("");
 

  return strArray.every((char) => {
    return char === char.toUpperCase();
  }
  ) || strArray.every((char) => {
    return char === char.toLowerCase();
  }
  ) || (strArray[0] === strArray[0].toUpperCase() && strArray.slice(1).every((char) => {
    return char === char.toLowerCase();
  }
  ));
}

console.log(detectCapital("USA"));
