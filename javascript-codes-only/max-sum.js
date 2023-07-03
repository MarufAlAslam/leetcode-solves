function maxSum(nums, k){
    let sum = 0
    let max = Math.max(...nums)
    const result = [max]
    for(let i = 1 ; i < k ; i++){
        max = max + 1
        result.push(max)
    }

    return result.reduce((acc, curr) => acc + curr, 0)
}

console.log(maxSum([1,2,3,4,5], 3))