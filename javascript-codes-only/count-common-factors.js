function countCommonFactors(a, b){
    let count = 0;
    if(a < b){
        for(let i = 1; i <= a; i++){
            if(a % i === 0 && b % i === 0){
                count++;
            }
        }
    }
    else{
        for(let i = 1; i <= b; i++){
            if(a % i === 0 && b % i === 0){
                count++;
            }
        }
    }
    return count
}

console.log(countCommonFactors(25, 30)); // 6