function missingNumber(arr) {
  let missing = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j <= arr.length; j++) {
      console.log("i: ", i, "j: ", j);
    }
    continue;
  }
  return missing;
}

console.log(missingNumber([1, 0, 3]));
