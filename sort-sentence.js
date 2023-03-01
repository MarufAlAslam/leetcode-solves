function sortSentence(str) {
  const splittedArray = str.split(" ");
  const resultArray = [];

  for (let i = 0; i < splittedArray.length; i++) {
    const index = parseInt(
      splittedArray[i].split("")[splittedArray[i].length - 1]
    );
    resultArray[index] = splittedArray[i].slice(0, splittedArray[i].length - 1);
  }
  const resultStr = resultArray.join(" ");
  return resultStr.slice(1, resultStr.length);
}

console.log(sortSentence("is2 sentence4 This1 a3"));
console.log(sortSentence("Myself2 Me1 I4 and3"));
