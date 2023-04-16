function greatestNumberOfCandy(candies, extraCandies) {
    const res = []
    const max = Math.max(...candies)
    for (let i = 0; i < candies.length; i++) {
        candies[i] = candies[i] + extraCandies
        if (candies[i] >= max) {
            res.push(true)
        } else {
            res.push(false)
        }
    }
    return res
}

console.log(greatestNumberOfCandy([2, 3, 5, 1, 3], 3))