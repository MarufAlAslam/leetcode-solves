function powerOfFour(num) {
  return (Math.log10(num) / Math.log10(4)) % 1 === 0;
}

console.log(powerOfFour(5)); // true
