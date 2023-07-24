/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function separate(words, separator){
    let result = []
    for(let i = 0; i < words.length; i++){
        let temp = words[i].split(separator)
        for(let j = 0; j < temp.length; j++){
            if(temp[j] !== ""){
                result.push(temp[j])
            }
        }
    }
    return result
}