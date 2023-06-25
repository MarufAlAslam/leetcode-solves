function rotateArray(arr, k) {
  let i = 0;

  while (i < k) {
    let end = arr.pop();
    arr.unshift(end);
    i++;
  }

    return arr;
}

// console.log(rotateArray([1,2,3,4,5,6,7], 3))
console.log(rotateArray([1, 2], 3));
// [5,6,7,1,2,3,4]
