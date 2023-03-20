function stringEquivalent(str1, str2) {
  str1 = str1.join("");
  str2 = str2.join("");
  return str1 === str2;
}

console.log(stringEquivalent(["abc", "d", "defg"], ["abcddefg"]));
