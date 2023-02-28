function basicCalculator(str) {
  let result = 0;
  let num = 0;
  let sign = 1;
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char >= "0" && char <= "9") {
      num = num * 10 + parseInt(char);
    } else if (char === "+") {
      result += sign * num;
      sign = 1;
      num = 0;
    } else if (char === "-") {
      result += sign * num;
      sign = -1;
      num = 0;
    } else if (char === "(") {
      stack.push(result);
      stack.push(sign);
      sign = 1;
      result = 0;
    } else if (char === ")") {
      result += sign * num;
      result *= stack.pop();
      result += stack.pop();
      num = 0;
    }
  }

  if (num !== 0) {
    result += sign * num;
  }

  return result;
}

console.log(basicCalculator("(1+(4+5+2)-3)+(6+8)")); // 2
