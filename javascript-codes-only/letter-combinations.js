function letterCombinations(digits) {
  let result = [];
  if(digits.length === 0) return result;
  const letters = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  function permute(string, index) {
    if (index === digits.length) {
      result.push(string);
      return;
    }

    for (let i = 0; i < letters[digits[index]].length; i++) {
      permute(string + letters[digits[index]][i], index + 1);
    }
  }

  permute("", 0);

  return result;
}

console.log(letterCombinations("")); // ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
