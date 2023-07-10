/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    // Create a new matrix with swapped rows and columns
    const transposedMatrix = [];
    for (let i = 0; i < cols; i++) {
      transposedMatrix[i] = [];
      for (let j = 0; j < rows; j++) {
        transposedMatrix[i][j] = matrix[j][i];
      }
    }
  
    return transposedMatrix;
  }