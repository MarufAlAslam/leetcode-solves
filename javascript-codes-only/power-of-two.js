function powerOfTwo(num) {
  return (Math.log10(num) / Math.log10(2)) % 1 === 0;
}

console.log(powerOfTwo(8)); // true
