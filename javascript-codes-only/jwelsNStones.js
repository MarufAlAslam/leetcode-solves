function jwelsNStones(jwels, stones) {
    const jArray = jwels.split("");
    const sArray = stones.split("");
    let count = 0;

    for (let i = 0; i < jArray.length; i++) {
        sArray.filter(
            (stone) => stone === jArray[i] && count++
        )
    }
    return count
}

console.log(jwelsNStones("aA", "aAAbbbb"));
console.log(jwelsNStones("z", "ZZ"));
console.log(jwelsNStones("badc", "ccc"));