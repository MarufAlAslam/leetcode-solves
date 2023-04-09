function longestSubsequence(arr) {
    const flagArr = []
    let index = 1
    let sum = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1]) {
            sum += arr[i]
            index++
        }
        else {
            flagArr.push(index)
            index = 1
            sum = 0
        }
    }
    return Math.max(...flagArr)
}

console.log(longestSubsequence([1, 3, 5, 4, 7]))
console.log(longestSubsequence([2, 2, 2, 2, 2]))