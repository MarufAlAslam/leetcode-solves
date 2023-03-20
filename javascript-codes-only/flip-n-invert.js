function flipNInver(arr) {
  const flipped = [];
  for (let i = 0; i < arr.length; i++) {
    flipped.push(arr[i].reverse());
  }

  for (let i = 0; i < flipped.length; i++) {
    for (let j = 0; j < flipped[i].length; j++) {
      if (flipped[i][j] === 0) {
        flipped[i][j] = 1;
      } else {
        flipped[i][j] = 0;
      }
    }
  }
  return flipped;
}

console.log(
  flipNInver([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ])
);
