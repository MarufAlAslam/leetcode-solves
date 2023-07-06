function countWordsWithPrefix(words, prefix){
    let count = 0;
    for(let i =0; i<words.length; i++){
        if(words[i].startsWith(prefix)){
            count++
        }
    }
    return count
}

console.log(countWordsWithPrefix(["pay","attention","practice","attend"], "at"))