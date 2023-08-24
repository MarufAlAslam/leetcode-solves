function minimizeString(str){
    const splittedStr = str.split("")
    const unique = [...new Set(splittedStr)]

    return unique.length
}
console.log(minimizeString("dddaaa")) // 1