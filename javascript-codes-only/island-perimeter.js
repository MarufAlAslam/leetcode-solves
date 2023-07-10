function islandPerimeter(grid) {
  let perimeter = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        if(grid[i][j] === 1){
            perimeter = perimeter + 4;

            if(i > 0 && grid[i-1][j] === 1){
                perimeter = perimeter - 2;
            }

            if(j > 0 && grid[i][j-1] === 1){
                perimeter = perimeter - 2;
            }
        }
    }
  }
  return perimeter;
}

console.log(
  islandPerimeter([
    [1, 0],
  ])
);
