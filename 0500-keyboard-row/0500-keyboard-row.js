/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function keyboardRow(words) {
    let row1 = "qwertyuiop"
    let row2 = "asdfghjkl"
    let row3 = "zxcvbnm"
    const result = []
    const temp = words
    words = words.map(word => word.toLowerCase())
    for(let i = 0; i < words.length; i++){
        const row = []
        const splitted = (words[i].split("")) 

        for(let j = 0; j< splitted.length; j++){
            if(row1.includes(splitted[j])){
                row.push(1)
                
            } else if(row2.includes(splitted[j])){
                row.push(2)
            } else if(row3.includes(splitted[j])){
                row.push(3)
            }
        }
        if(row.every( (val, i, arr) => val === arr[0] )){
            result.push(temp[i])
        }
    }
    return result
}