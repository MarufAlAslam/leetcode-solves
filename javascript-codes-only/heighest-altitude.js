function heighestAltitude(gain) {
  const altitudes = [0];
  let index = 0;
  for (i = 0; i < gain.length; i++) {
    altitudes.push(altitudes[index] + gain[i]);
    index++;
  }
  return Math.max(...altitudes);
}

// console.log(heighestAltitude([-5, 1, 5, 0, -7])); 1
// console.log(heighestAltitude([-4, -3, -2, -1, 4, 3, 2])); 0
