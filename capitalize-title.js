function capitalizeTitle(str) {
  const middleArray = str.toLowerCase().split(" ");
  const resultArray = [];
  for (let i = 0; i < middleArray.length; i++) {
    const splitted = middleArray[i].split("");
    if (splitted.length > 2) {
      splitted[0] = splitted[0].toUpperCase();
      resultArray.push(splitted.join(""));
    } else {
      splitted[0] = splitted[0].toLowerCase();
      resultArray.push(splitted.join(""));
    }
  }

  return resultArray.join(" ");
}

console.log(capitalizeTitle("capiTalIze tHe titLe"));
console.log(capitalizeTitle("First leTTeR of EACH Word"));
