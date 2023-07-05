/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function maxValueInString(strs){
    const vals = []
    for(let i = 0 ; i<strs.length; i++){
        if(isNaN(strs[i])){
            vals.push(strs[i].length)
        }
        else{
            vals.push(Number(strs[i]))
        }
    }
    return Math.max(...vals)
}