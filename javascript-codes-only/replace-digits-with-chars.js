function replaceDigitsWithChars(str){
    const chars = ("abcdefghijklmnopqrstuvwxyz").split("")
    const splitted = str.split("")
    
    for (let i = 0; i < splitted.length; i++){
        if (i % 2 !== 0){
            splitted[i] = chars[chars.indexOf(splitted[i-1]) + parseInt(splitted[i])]
        }
    }

    return splitted.join("")
}

console.log(replaceDigitsWithChars("a1b2c3d4e")) // "abcdef"