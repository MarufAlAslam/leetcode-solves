function runningSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        arr[i] = sum
    }
    return arr
}

console.log(runningSum([1, 2, 3, 4]))