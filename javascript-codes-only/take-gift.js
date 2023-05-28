// You are given an integer array gifts denoting the number of gifts in various piles. Every second, you do the following:

// Choose the pile with the maximum number of gifts.
// If there is more than one pile with the maximum number of gifts, choose any.
// Leave behind the floor of the square root of the number of gifts in the pile. Take the rest of the gifts.
// Return the number of gifts remaining after k seconds.

 

function takeGift(gifts, k){
    let max = Math.max(...gifts)
    let maxIndex = gifts.indexOf(max)
    let sqrt = Math.floor(Math.sqrt(max))
    gifts[maxIndex] = max - sqrt
    k--
    if(k > 0){
        return takeGift(gifts, k)
    }else{
        return gifts.reduce((a,b) => a+b)
    }
}
// console.log(takeGift([25, 64, 9, 4, 100], 4))
console.log(takeGift([54,6,34,66,63,52,39,62,46,75,28,65,18,37,18,13,33,69,19,40,13,10,43,61,72], 7))