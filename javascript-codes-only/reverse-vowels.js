function reverseVowels(str) {
  const splittedStr = str.split("");
  let vowels = [];
  for (let i = 0; i < splittedStr.length; i++) {
    if (
        splittedStr[i] === "a" ||
        splittedStr[i] === "A" ||
        splittedStr[i] === "e" ||
        splittedStr[i] === "E" ||
        splittedStr[i] === "i" ||
        splittedStr[i] === "I" ||
        splittedStr[i] === "o" ||
        splittedStr[i] === "O" ||
        splittedStr[i] === "u" ||
        splittedStr[i] === "U"
    ) {
      vowels.push(splittedStr[i]);
    }
  }
  for (let i = 0; i < splittedStr.length; i++) {
    if (
      splittedStr[i] === "a" ||
      splittedStr[i] === "A" ||
      splittedStr[i] === "e" ||
      splittedStr[i] === "E" ||
      splittedStr[i] === "i" ||
      splittedStr[i] === "I" ||
      splittedStr[i] === "o" ||
      splittedStr[i] === "O" ||
      splittedStr[i] === "u" ||
      splittedStr[i] === "U"
    ) {
      const popped = vowels.pop();
      splittedStr[i] = popped;
    }
  }
  return splittedStr.join("");
}

console.log(reverseVowels("aA")); // 1
