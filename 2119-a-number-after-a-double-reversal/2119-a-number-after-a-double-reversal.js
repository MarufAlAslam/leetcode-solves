/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function doubleReversal(n){
    return parseInt((parseInt(n.toString().split("").reverse().join(""))).toString().split("").reverse().join("")) === n;
}