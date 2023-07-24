/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function majorityElement(nums){
    let obj = {}
    for(let i = 0; i < nums.length; i++){
        if(obj[nums[i]]){
            obj[nums[i]]++
        } else {
            obj[nums[i]] = 1
        }
    }
    for(let key in obj){
        if(obj[key] > nums.length/2){
            return key
        }
    }
}