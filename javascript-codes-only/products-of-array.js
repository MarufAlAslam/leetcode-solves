function maxProducts(nums){
    let result = 1;
    for(let i = 0; i < nums.length; i++){
        result *= nums[i];
    }
    return result;
}

console.log(maxProducts([-100,-98,-1,2,3,4])); // 6