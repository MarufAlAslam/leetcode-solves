/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function shortestDistance(str, char){
    let result = [];
    let charIndex = [];
    for(let i = 0; i < str.length; i++){
        if(str[i] === char){
            charIndex.push(i);
        }
    }
    for(let i = 0; i < str.length; i++){
        let min = Infinity;
        for(let j = 0; j < charIndex.length; j++){
            if(Math.abs(i - charIndex[j]) < min){
                min = Math.abs(i - charIndex[j]);
            }
        }
        result.push(min);
    }

    return result;
}