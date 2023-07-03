/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function decompress(nums){
    const result = []
    for (let i = 0; i < nums.length; i += 2){
        const freq = nums[i]

        for (let j = 1 ; j <= freq; j++){
            result.push(nums[i+1])
        }
    }
    return result
}