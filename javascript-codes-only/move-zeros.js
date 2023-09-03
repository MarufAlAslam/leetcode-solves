function moveZeros(nums){
    const zeros = []
    const nonZero = []

    for(let i = 0; i< nums.length; i++){
        if(nums[i] !== 0){
            nonZero.push(nums[i])
        }
        else{
            zeros.push(nums[i])
        }
    }

    nums = nonZero.concat(zeros)
    return nums
}

console.log(moveZeros([0,1,0,3,12])); // [1,3,12,0,0]