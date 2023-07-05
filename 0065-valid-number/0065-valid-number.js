/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function validNumber(s){
    if(s === "Infinity" || s === "-Infinity" || s === "+Infinity"){
        return false;
    }
    if(s === "NaN"){
        return false;
    }
    return !isNaN(s);
}