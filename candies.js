function candies(ratings) {
  const candy = [1];
  for (let i = 0; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candy[i] = candy[i - 1] + 1;
    } else {
      candy[i] = 1;
    }
  }

  //   sum candies
  var sum = 0;
  for (let i = 0; i < candy.length; i++) {
    sum += candy[i];
  }
  return sum;
}

console.log(candies([1, 3, 2, 2, 1]));
console.log(candies([1, 2, 2]));
console.log(candies([1, 0, 2]));
