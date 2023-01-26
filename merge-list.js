function merge(list1, list2) {
  let result = [];

  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i]);
  }

  for (let i = 0; i < list2.length; i++) {
    result.push(list2[i]);
  }

  return result.sort((a, b) => a - b);
}

console.log(merge([], [0]));
