/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function max69(number) {
    let numberArray = number.toString().split('')
    let index = 0;

    while (index < numberArray.length) {
        if (numberArray[index] === '6') {
            numberArray[index] = '9'
            break;
        }
        index++
    }
    return parseInt(numberArray.join(''))
}