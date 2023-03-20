function percentOfLetter(str, letter) {
  let flag = 0;
  const strArray = str.split("");
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] === letter) {
      flag++;
    }
  }
  return parseInt((flag / strArray.length) * 100);
}

console.log(percentOfLetter("foobar", "o"));
