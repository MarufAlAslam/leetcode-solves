// roman to integer

// js code to convert roman to integer

// function to convert roman to integer
function romanToInteger(roman) {
  // create a lookup table to store roman values
  const lookup = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  // initialize the result
  let result = 0;

  // iterate over the string
  for (let i = 0; i < roman.length; i++) {
    // get the current and the next roman character
    const current = roman[i];
    const next = roman[i + 1];

    // if the next roman character is greater than the current one
    // subtract the current value from the result
    if (lookup[next] > lookup[current]) {
      result -= lookup[current];
    } else {
      // add the current value to the result
      result += lookup[current];
    }
  }

  // return the result
  return result;
}

// convert roman to integer
console.log(romanToInteger("MCMXCIV"));
