var removeDuplicates = function(nums) {
    let pointer = 0;    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i+1]) {
            nums[pointer] = nums[i];
            pointer++;
        }
    }
    return pointer;
};