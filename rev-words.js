function revWord(str) {
  let updatedString = str.split(" ").reverse().join(",");
  if (updatedString[0] === " ") {
    // console.log("first char is space");
    updatedString = updatedString[0].replace(" ", "") + updatedString.slice(1);
  }
  if (updatedString[updatedString.length - 1] === " ") {
    // console.log("last char is space");
    updatedString =
      updatedString[0].replace(" ", "") +
      updatedString.slice(0, updatedString.length - 1);
  }

  return updatedString;
}

console.log(revWord(" Hello World "));
