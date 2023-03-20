function decodeString(key, message) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let result = "";
  const blankArray = [];
  key = key.replaceAll(" ", "").split("");
  //   remove duplicates from key
  key = key.filter((item, index) => key.indexOf(item) === index);
  message = message.split("");
  for (let i = 0; i < message.length; i++) {
    if (message[i] === " ") {
      blankArray.push(i);
    } else {
      for (let j = 0; j < key.length; j++) {
        if (message[i] === key[j]) {
          result = result + alphabet[j];
          break;
        }
      }
    }
  }

  for (let i = 0; i < blankArray.length; i++) {
    result = result.slice(0, blankArray[i]) + " " + result.slice(blankArray[i]);
  }

  return result;
}

console.log(
  decodeString(
    "the quick brown fox jumps over the lazy dog",
    "vkbs bs t suepuv"
  )
);
