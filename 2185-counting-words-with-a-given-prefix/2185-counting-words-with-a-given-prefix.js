/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function countWordsWithPrefix(words, prefix){
    let count = 0;
    for(let i =0; i<words.length; i++){
        if(words[i].startsWith(prefix)){
            count++
        }
    }
    return count
}