function isSumEqual(first, second, target){
    // numeric value of a = 0, b = 1, c = 2, ..., z = 25
    let leftSum = 0
    let rightSum = 0
    const firstNumeric = first.split("").map((letter) => letter.charCodeAt(0) - 97).join("")
    const secondNumeric = second.split("").map((letter) => letter.charCodeAt(0) - 97).join("")
    const targetNumeric = target.split("").map((letter) => letter.charCodeAt(0) - 97).join("")

    leftSum = parseInt(firstNumeric) + parseInt(secondNumeric)
    rightSum = parseInt(targetNumeric)

    return leftSum === rightSum
}

console.log(isSumEqual("b", "b", "c")) // 1