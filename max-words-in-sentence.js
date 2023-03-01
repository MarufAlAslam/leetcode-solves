function maxNumOfWords(strArray) {
  let maxLength = 0;

  for (let i = 0; i < strArray.length; i++) {
    let currentLength = strArray[i].split(" ").length;
    if (currentLength > maxLength) {
      maxLength = currentLength;
    }
  }

  return maxLength;
}
console.log(
  maxNumOfWords([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
  ])
);
