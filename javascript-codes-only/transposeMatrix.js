function transpose(matrix) {
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
  
  // Example usage:
  const matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  console.log(transpose(matrix1));
  // Output: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
  
  const matrix2 = [[1, 2, 3], [4, 5, 6]];
  console.log(transpose(matrix2));
  // Output: [[1, 4], [2, 5], [3, 6]]
  

//   transposeMatrix