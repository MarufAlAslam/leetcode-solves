function evenDigitSum(num){
    let count = 0;
    for (let i = 1 ; i<=num ; i++){
        let sum = 0;
        let digits = i.toString().split('');
        for (let j = 0 ; j<digits.length ; j++){
            sum += parseInt(digits[j]);
        }
        if (sum%2===0){
            count++;
        }
    }
    return count
}

console.log(evenDigitSum(4))