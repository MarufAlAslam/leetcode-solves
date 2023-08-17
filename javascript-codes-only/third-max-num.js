function thirdMaxNum(nums){
    nums = [...new Set(nums)]
    if(nums.length < 3){
        return Math.max(...nums);
    }
    else{
        
        nums = nums.sort((a,b) => a-b)
        // console.log(nums)
        nums.pop()
        nums.pop()
        return nums.pop()
    }
}

console.log(thirdMaxNum([3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6]))