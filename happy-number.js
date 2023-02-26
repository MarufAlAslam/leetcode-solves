// function getSumOfNumberSquare(){

// }

function happyNumber(n) {
  let strArr = n.toString().split("");
  let sum = 0;
  for (let i = 0; i < strArr.length; i++) {
    sum = sum + Math.pow(strArr[i], 2);
  }

  if (sum === 1) {
    return true;
  } else if (sum === 4) {
    return false;
  } else {
    return happyNumber(sum);
  }
}

console.log(happyNumber(19));
