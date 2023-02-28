function powerOfThree(num) {
  return (Math.log10(num) / Math.log10(3)) % 1 === 0;
}

console.log(powerOfThree(1)); // true
