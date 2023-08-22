/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function(grid) {
    return !grid.some((_, i) => grid[i].some((_, j) => (i === j || i === grid.length - 1 - j) ? grid[i][j] === 0 : grid[i][j] !== 0));
};