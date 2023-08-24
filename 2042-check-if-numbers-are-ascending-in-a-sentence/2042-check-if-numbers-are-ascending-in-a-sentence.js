/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function checkAscendingNumbers(str){
    const splittedStr = str.split(" ")
    let numbers = []
    for(let i = 0; i<splittedStr.length; i++){
        if(!isNaN(splittedStr[i])){
            numbers.push(parseInt(splittedStr[i]))
        }
    }
    
    for(let i = 0; i<numbers.length; i++){
        if(numbers[i] >= numbers[i+1]){
            return false
        }
    }

    return true
}