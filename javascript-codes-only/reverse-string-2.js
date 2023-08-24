function reverseString(str, k) {
  let resultStr = "";
  const splitted = str.split("");

  let k2 = 2 * k;

  for (let i = 0; i < splitted.length; i = i + k2) {
    const sliced = splitted.slice(i, i + k);
    const reversed = sliced.reverse();
    resultStr += reversed.join("");
    const sliced2 = splitted.slice(i + k, i + 2 * k);
    resultStr += sliced2.join("");
  }

    return resultStr;
}

console.log(reverseString("abcd", 2)); // 1
