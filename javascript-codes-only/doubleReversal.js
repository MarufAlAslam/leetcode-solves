function doubleReversal(n){
    return parseInt((parseInt(n.toString().split("").reverse().join(""))).toString().split("").reverse().join("")) === n;
}

console.log(doubleReversal(1800)); // 321