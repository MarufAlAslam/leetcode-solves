function missingNumber(arr) {
  let missing = 0;
  // create a new array from 1 to arr.length
  let refArray = Array.from({ length: arr.length }, (v, i) => i + 1);

  // compare 2 arrays to find the missing number
  for (let i = 0; i < refArray.length; i++) {
    if (arr.indexOf(refArray[i]) === -1) {
      missing = refArray[i];
    }
  }

  return missing;
}

console.log(missingNumber([1, 0, 3]));
