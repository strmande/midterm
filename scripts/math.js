// Math
// Question 1
// Generate a random number between 1 and 100 (inclusive) using the
// Math.random() function and round it to the nearest integer. Store the result in a
// letiable called randomNumber.
let randomNumber = Math.round(Math.random() * 99) + 1;
// Question 2
// Write a JavaScript function called calculateFactorial that takes a
// number as an argument and returns its factorial.
function calculateFactorial(number) {
  if (number === 0 || number === 1) {
    return 1; // Factorial of 0 and 1 is always 1
  } else {
    let factorial = 1;
    for (let i = number; i >= 2; i--) {
      factorial *= i;
    }
    return factorial;
  }
}
// Question 3
// Write a JavaScript function called calculatePower that takes two
// numbers, base and exponent, as arguments and returns the result of base raised to
// the power of exponent.
function calculatePower(base, exponent) {
  let result = Math.pow(base, exponent);
  return result;
}