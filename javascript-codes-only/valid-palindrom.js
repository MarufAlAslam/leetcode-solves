function validPalindrom(str) {
  str = str.replace(/\W/g, "").replace("_", "").toLowerCase();
  const revStr = str.split("").reverse().join("");

  return str === revStr ? true : false;
}

console.log(validPalindrom("ab_a"));
