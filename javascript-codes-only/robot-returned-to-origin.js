function robotReturnedToOrigin(moves) {
  let x = 0;
  let y = 0;
  const movesArray = moves.split("");

  for (let i = 0; i < movesArray.length; i++) {
    if (movesArray[i] === "U") {
      y = y + 1;
    } else if (movesArray[i] === "D") {
      y = y - 1;
    } else if (movesArray[i] === "L") {
      x = x - 1;
    } else if (movesArray[i] === "R") {
      x = x + 1;
    }
  }

  return x === 0 && y === 0;
}

console.log(robotReturnedToOrigin("UDDU")); // true
