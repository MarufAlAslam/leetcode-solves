function sumMultiples (num){
    let sum = 0
    for (let i = 1 ; i<= num; i++){
        if(i % 3 === 0 || i % 5 === 0 || i % 7 === 0){
            sum += i
        }
    }
    return sum
}

console.log(sumMultiples(7))