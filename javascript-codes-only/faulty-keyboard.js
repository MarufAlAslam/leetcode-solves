function faultyKeyboard(str){
    let resultStr = ""

    const splittedStr = str.split("")
    for(let i = 0; i<splittedStr.length; i++){
        if(splittedStr[i] !== 'i'){
            resultStr += splittedStr[i]
        }
        else{
            resultStr = resultStr.split("").reverse().join("")
        }
    }
    return resultStr
}

console.log(faultyKeyboard("poiinter")) // 1