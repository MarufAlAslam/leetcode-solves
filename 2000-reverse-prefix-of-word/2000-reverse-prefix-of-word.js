/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function reversePrefix(str, ch) {
  const temp = [];
  const splitted = str.split("");

  if (!splitted.includes(ch)) {
    return str;
  } else {
    let i = 0;
    while (true) {
      if (splitted[i] === ch) {
        temp.push(splitted[i]);
        break;
      } else {
        temp.push(splitted[i]);
        i++;
      }
    }

    return temp
      .reverse()
      .concat(splitted.slice(i + 1))
      .join("");
  }
}