// Operators
// Question 1
// Given the variables a = 10 and b = 3, what is the value of the
// following expression: a % b?
// the value of a%b is 1
let a = 10;
let b = 3;
let c = a % b;
console.log("The value of a % b is " + c);
// Question 2
// Write a JavaScript function called isInRange that takes a number as
// an argument and returns true if it falls within a specific range (e.g., between 10
// and 20) and false otherwise.
function isInRange(number) {
  if (number >= min && number <= max) {
    return true;
  } else {
    return false;
  }
}
// Question 3
// Given the variables a = 5, b = 3, and c = 2, what is the value of the
// following expression: a > b || c < b && a === c?
// a > b is true
// c < b is true
// a === c is false
// c < b && a === c   is true && false => false
// a > b || c < b && a === c is true || false which is true
// hence a > b || c < b && a === c value is true
a = 5;
b = 3;
c = 2;
console.log(a > b || c < b && a === c);