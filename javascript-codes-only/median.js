function getMedian(arr1, arr2) {
  let mergedArray = arr1.concat(arr2);
  mergedArray = mergedArray.sort((a, b) => a - b);
  //   return mergedArray;

  if (mergedArray.length % 2 !== 0) {
    return mergedArray[Math.floor(mergedArray.length / 2)];
  } else {
    let small = mergedArray[Math.floor(mergedArray.length / 2) - 1];
    let large = mergedArray[Math.floor(mergedArray.length / 2)];

    return (small + large) / 2;
  }
}

console.log(getMedian([1, 2], [3, 4]));
console.log(getMedian([3], [-2, -1]));
