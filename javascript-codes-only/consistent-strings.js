function consistentStrings (allowed, words){
    let counter = 0
    for (let i = 0; i < words.length; i++) {
        let isConsistent = true
        for (let j = 0; j < words[i].length; j++) {
            if (!allowed.includes(words[i][j])) {
                isConsistent = false
                break
            }
        }
        if (isConsistent) counter++
    }
    return counter
}

console.log(consistentStrings("cad", ["cc","acd","b","ba","bac","bad","ac","d"])) // 2