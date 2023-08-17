function kthLargestElement(nums, k){

        nums = nums.sort((a,b) => a-b)
        // console.log(nums)
        for(let i=0; i<k-1; i++){
            nums.pop()
        }
        return nums.pop()
}

console.log(kthLargestElement([2,1], 2))