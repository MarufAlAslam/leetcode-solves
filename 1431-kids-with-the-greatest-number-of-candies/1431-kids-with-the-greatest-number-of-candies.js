/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function greatestNumberOfCandy(candies, extraCandies) {
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