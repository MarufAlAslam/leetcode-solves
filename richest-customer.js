function richestCustomer(customers) {
  const sumArray = [];

  for (let i = 0; i < customers.length; i++) {
    sumArray.push(add(customers[i]));
  }

  //   find the max from sumArray
  let max = sumArray[0];
  for (let i = 0; i < sumArray.length; i++) {
    if (sumArray[i] > max) {
      max = sumArray[i];
    }
  }
  return max;
}
function add(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }

  return sum;
}

console.log(
  richestCustomer([
    [1, 2, 3],
    [3, 2, 1],
  ])
);
