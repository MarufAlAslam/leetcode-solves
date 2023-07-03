function createArray (nums, index){
    const result = []
    for (let i = 0 ; i < nums.length; i++){
        result.splice(index[i], 0, nums[i])
    }
    return result
}

// console.log(createArray([0,1,2,3,4], [0,1,2,2,1]))
console.log(createArray([1,2,3,4,0], [0,1,2,3,0]))