function uncommonWords(str1, str2) {
  let str1Arr = str1.split(" ");
  let str2Arr = str2.split(" ");

  let str = str1Arr.concat(str2Arr);

  const uniques = [];

  for (let i = 0; i < str.length; i++) {
    // if duplicate, remove both
    if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
      str.splice(str.indexOf(str[i]), 1);
      str.splice(str.lastIndexOf(str[i]), 1);
    }
  }

  return str;
}

console.log(uncommonWords("this apple is sweet", "this apple is sour")); // 1
