function greatestCommonDivisor(nums) {
    const max = Math.max(...nums);
    const min = Math.min(...nums);

    let result = 1;

    for (let i = 1; i <= min; i++) {
        if(max % i === 0 && min % i === 0){
            result = i;
        }
    }
  return result;
}

console.log(greatestCommonDivisor([3,3])); // 2
