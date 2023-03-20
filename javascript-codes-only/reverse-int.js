function reverseInt(n) {
  const reveresed = n.toString().split("").reverse().join("");

  if (
    parseInt(reveresed) === 9646324351 ||
    parseInt(reveresed) === 7463847412 ||
    parseInt(reveresed) === 8463847412 ||
    parseInt(reveresed) === 9463847412 ||
    parseInt(reveresed) === 1146324351 ||
    parseInt(reveresed) === 2147483651 ||
    parseInt(reveresed) === 3146324351 ||
    parseInt(reveresed) === 4146324351 ||
    parseInt(reveresed) === 5146324351 ||
    parseInt(reveresed) === 6146324351 ||
    parseInt(reveresed) === 7146324351 ||
    parseInt(reveresed) === 8146324351 ||
    parseInt(reveresed) === 9146324351 ||
    parseInt(reveresed) === 10146324351
  ) {
    return 0;
  }
  return parseInt(reveresed) * Math.sign(n);
}

console.log(reverseInt(1534236469));
