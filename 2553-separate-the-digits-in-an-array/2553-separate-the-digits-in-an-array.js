/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function separateDigits(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toString();
    if (arr[i].length > 1) {
      arr[i] = arr[i].split("").join(",");
    }

    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === ",") {
        continue;
      } else {
        result.push(parseInt(arr[i][j]));
      }
    }
  }
  return result;
}