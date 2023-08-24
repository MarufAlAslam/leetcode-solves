/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function isSumEqual(first, second, target){
    let leftSum = 0
    let rightSum = 0
    const firstNumeric = first.split("").map((letter) => letter.charCodeAt(0) - 97).join("")
    const secondNumeric = second.split("").map((letter) => letter.charCodeAt(0) - 97).join("")
    const targetNumeric = target.split("").map((letter) => letter.charCodeAt(0) - 97).join("")

    leftSum = parseInt(firstNumeric) + parseInt(secondNumeric)
    rightSum = parseInt(targetNumeric)

    return leftSum === rightSum
}