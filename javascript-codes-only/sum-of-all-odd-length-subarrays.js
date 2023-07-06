function sumOfAllOddLengthSubArrays(arr) {
  let sum = 0;
  const subArray = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j += 2) {
            subArray.push(arr.slice(i, j + 1));
        }
    }

    for (let i = 0; i < subArray.length; i++) {
        if (subArray[i].length % 2 !== 0) {
            sum += subArray[i].reduce((a, b) => a + b);
        }
    }

    return sum;
}

console.log(sumOfAllOddLengthSubArrays([1,2]));
