// Numbers
// Question 1
// Calculate the square root of a given number and store the result in a
// variable called result
let result = Math.sqrt(number);
// Question 2
// Write a JavaScript function called isPrime that takes a number as an
// argument and returns true if it is a prime number and false otherwise.
function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (n % i === 0) {
      return false;
    } else {
      return true;
    }
  }
}
// Question 3
// Write a JavaScript function called generateRandomNumber that takes
// two numbers, min, and max, as arguments and returns a random number between
// min and max
function generateRandomNumber(min, max) {
  let range = max - min + 1;
  let randomNumber = Math.floor(Math.random() * range) + min;
  return randomNumber;
}