// Given an integer x, return true if x is a  palindrome and false otherwise.

function isPalindrome(x) {
  let str = x.toString();
  let rev = str.split("").reverse().join("");
  if (str === rev) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
