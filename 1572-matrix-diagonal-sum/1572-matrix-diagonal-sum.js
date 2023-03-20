/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function diagonalSum(matrix) {
  const diagonalArray = [];
  let sum;
  for (let i = 0; i < matrix.length; i++) {
    diagonalArray.push(matrix[i][i]);
    matrix[i][i] = 0;
    diagonalArray.push(matrix[i][matrix.length - 1 - i]);
  }
  console.log(matrix);
  return diagonalArray.reduce((a, b) => a + b);
}