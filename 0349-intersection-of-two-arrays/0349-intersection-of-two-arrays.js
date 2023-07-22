/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function intersection(nums1, nums2){
    const result = [];
    for (let i=0; i<nums1.length; i++){
        for (let j=0; j<nums2.length; j++){
            if (nums1[i] === nums2[j]){
                result.push(nums1[i])
            }
        }
    }

    return [...new Set(result)]
}