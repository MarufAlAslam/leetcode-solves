function countFairPairs(arr, lower, upper){
    let count = 0
    for (let i = 0; i<arr.length; i++){
        for (let j = i+1; j<arr.length; j++){
            if (arr[i] + arr[j] >= lower && arr[i] + arr[j] <= upper){
                count++
            }
        }
    }
    return count
}

console.log(countFairPairs([1,7,9,2,5], 11, 11))