function sortPeople(names, ages) {
  const sortedArray = [];
  for (let i = 0; i < ages.length; i++) {
    sortedArray.push({ name: names[i], age: ages[i] });
  }

  sortedArray.sort((a, b) => b.age - a.age);

  for (let i = 0; i < sortedArray.length; i++) {
    names[i] = sortedArray[i].name;
  }

  return names;
}

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));
