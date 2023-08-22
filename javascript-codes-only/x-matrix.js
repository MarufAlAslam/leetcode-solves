function xMatrix(grid) {
  let isX = false;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] > 0 && i === j) {
        grid[i][j] = "x";
      } else if (grid[i][j] === 0 && i !== j) {
        grid[i][j] = "o";
      } else if (grid[i][grid.length - i - 1] > 0) {
        grid[i][grid.length - i - 1] = "x";
      }
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] !== "x" && grid[i][j] !== "o") {
        isX = false;
        return isX;
      } else {
        isX = true;
      }
    }
  }
  return isX;
}

console.log(
  xMatrix([
    [
      [2, 0, 0, 0, 0],
      [0, 4, 0, 1, 0],
      [0, 0, 5, 0, 0],
      [0, 5, 0, 2, 0],
      [4, 0, 0, 0, 2],
    ],
  ])
);


