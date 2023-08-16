/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function intToRoman(num){
    const list = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
    const valueList = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let result = '';

    // Run until we have converted the full number
    while (num !== 0) {
        // Loop though the available numerals
        for (let i = 0; i < list.length; i++) {
            // Check if the outstanding number is greater than the current numeral
            if (num >= valueList[i]) {
                // If so, add this numeral to the result and subtract its value from the outstanding number
                result += list[i];
                num -= valueList[i];
                break;
            }
        }
    }
    return result;
}