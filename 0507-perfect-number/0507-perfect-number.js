/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function perfectNumber(num){
    const divisors = []
    const flag = false
    for (let i = 1; i < num; i++){
        if (num % i === 0){
            divisors.push(i)
        }
    }

    return divisors.reduce((acc, curr) => acc + curr, 0) === num ? true : false
}