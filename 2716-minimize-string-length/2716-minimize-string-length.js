/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function minimizeString(str){
    const splittedStr = str.split("")
    const unique = [...new Set(splittedStr)]

    return unique.length
}