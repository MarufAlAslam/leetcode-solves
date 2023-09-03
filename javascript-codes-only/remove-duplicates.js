function removeDuplicates(nums){
    const result = [];
    result.push(nums[0]);
    for(let i = 1; i < nums.length; i++){
        if(nums[i] !== nums[i-1]){
            result.push(nums[i]);
        }
    }

    return result.length;
}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])); // 2