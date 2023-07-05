function maxValueInString(strs){
    const vals = []
    for(let i = 0 ; i<strs.length; i++){
        if(isNaN(strs[i])){
            vals.push(strs[i].length)
        }
        else{
            vals.push(Number(strs[i]))
        }
    }
    return Math.max(...vals)
}


console.log(maxValueInString(["alic3", "bob", "3", "4", "00000"]))