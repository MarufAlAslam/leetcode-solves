function firstUniqueCharecter(str){
    let temp = 0
    const splited = str.split("")
    for(let i = 0; i < splited.length; i++){
        for(let j = 0; j < splited.length; j++){
            if(splited[i] === splited[j] && i !== j){
                break
            }
            else{
                console.log(splited[i], splited[j])
                temp = i
                break
            }
        }
    }
    return temp
}

console.log(firstUniqueCharecter("leetcode")); // 0