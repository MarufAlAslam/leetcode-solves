function countSmaller(nums){
    const counts = new Array(nums.length).fill(0)
    for(let i = 0; i< nums.length; i++){
        let count = 0
        for(let j = i ; j < nums.length ; j ++){
            if(nums[i] > nums[j]){
               count++
            }
        }
        counts[i] = count
    }
    return counts
}

console.log(countSmaller([-1]))