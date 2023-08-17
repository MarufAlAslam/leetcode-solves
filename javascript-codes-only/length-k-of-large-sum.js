function lengthKOfLargeSum(nums, k){
    nums = nums.map((n,i) => [i, n])
    nums.sort((a,b) => b[1] - a[1])
    let arr = nums.slice(0, k)
    let res = []
    for(let i of arr) {
        res[i[0]] = i[1]
    }
    return res.filter(i=>i !== undefined)
}

console.log(lengthKOfLargeSum([-1,-2,3,4], 3))