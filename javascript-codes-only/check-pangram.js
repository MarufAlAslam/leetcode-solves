function checkPangram(str) {
  alphabets = "abcdefghijklmnopqrstuvwxyz".split("");

  str = str.toLowerCase();
  return alphabets.every((x) => str.includes(x));
}

console.log(checkPangram("thequickbrownfoxjumpsoverthelazydog"));
