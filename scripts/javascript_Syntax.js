// JavaScript Syntax
// Question 1
let number = 10;
console.log(Number + 5); // it should be number with lower case n and not Number
// Question 2
// Write a JavaScript function called isEven that takes a number as an argument
// and returns true if the number is even and false if it is odd
function isEven(number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
// Question 3
// Write a JavaScript function called isPalindrome that takes a string as an
// argument and returns true if it is a palindrome (reads the same forwards and backwards)
// and false otherwise.
function isPalindrome(str) {
  // to  get the total length of string
  const length = str.length;

  for (let i = 0; i < length / 2; i++) {
    // check if characters are same
    if (str[i] !== str[length - 1 - i]) {
      return false;
    }
  }
  return true;
}