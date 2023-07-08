// Loops and Iterations
// Question 1
// Write a while loop that prints the numbers from 1 to 20.
let x = 1;
while (x <= 20) {
  console.log(x);
  x++;
}
// Question 2
// Write a JavaScript function called calculateSum that takes a positive
// integer n as an argument and returns the sum of all numbers from 1 to n.
function calculateSum(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}
// Question 3
// Write a JavaScript function called calculateFactorialIterative that
// takes a positive integer n as an argument and calculates its factorial using a loop
// instead of recursion.
function calculateFactorialIterative(n) {
  let factorial = 1;

  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }

  return factorial;
}