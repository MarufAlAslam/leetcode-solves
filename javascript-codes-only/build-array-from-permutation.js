function buildArray(nums){
    return nums.map((num) => nums[num])
}


console.log(buildArray([5,0,1,2,3,4]))