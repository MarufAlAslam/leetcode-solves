function searchPositon(arr, target) {
  return arr
    .concat(target)
    .sort((a, b) => a - b)
    .indexOf(target);
}

console.log(searchPositon([1, 2, 4, 5], 3));
