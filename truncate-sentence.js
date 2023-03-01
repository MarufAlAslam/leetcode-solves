function truncateSentence(str, key) {
  str = str.split(" ");
  const resultArray = [];
  for (let i = 0; i < key; i++) {
    resultArray.push(str[i]);
  }
  return resultArray.join(" ");
}

console.log(truncateSentence("Hello how are you Contestant", 4));
