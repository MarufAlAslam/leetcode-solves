/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function checkOccurance(str, search) {
  let flag = -1;
  const splitted = str.split(" ");
  for (let i = 0; i < splitted.length; i++) {
    if (splitted[i].startsWith(search)) {
      flag = i + 1;
      return flag
    }
  }

  return flag;
}