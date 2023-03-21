/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function mergeStrings(str1, str2) {
  const str1Array = str1.split("");
  const str2Array = str2.split("");
  const modifiedStr2Array = [];
  const remaining = [];
  const result = [];

  for (let i = 0; i < str1Array.length; i++) {
    result.push(str1Array[i]);
    if (str2Array[i]) {
      result.push(str2Array[i]);
      modifiedStr2Array.push(str2Array[i]);
    }
  }

  for (let i = modifiedStr2Array.length; i < str2Array.length; i++) {
    remaining.push(str2Array[i]);
  }

  return [...result, ...remaining].join("");
}