function pivotIndex(nums) {
    let sumLeft = 0
    let sumRight = 0

    for (let i = 0; i < nums.length; i++) {
        sumRight += nums[i]
    }

    for (let i = 0; i < nums.length; i++) {
        sumRight -= nums[i]
        if (sumLeft === sumRight) {
            return i >= 0 ? i : -1
        }
        sumLeft += nums[i]
    }
    return -1
}



console.log(pivotIndex([1, 7, 3, 6, 5, 6]))
console.log(pivotIndex([1, 2, 3]))
console.log(pivotIndex([2, 1, -1]))
