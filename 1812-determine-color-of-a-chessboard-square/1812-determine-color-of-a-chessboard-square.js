/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function colorOfChessBoard(str) {
  const splittedArray = str.split("");
  if (
    splittedArray[0] === "a" ||
    splittedArray[0] === "c" ||
    splittedArray[0] === "e" ||
    splittedArray[0] === "g"
  ) {
    if (parseInt(splittedArray[1]) % 2 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    if (parseInt(splittedArray[1]) % 2 === 0) {
      return false;
    } else {
      return true;
    }
  }
}