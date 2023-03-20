function removeElement(numbers, value) {
  const resultArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] != value) {
      resultArray.push(numbers[i]);
    }
  }

  return resultArray;
}

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
