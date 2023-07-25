/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function reverseString(str){
    const splitted = str.split(" ")

    return splitted.map(word => {
        return word.split("").reverse().join("")
    }).join(" ")
}