// Conditionals
// Question 1
// Write an if-else statement that checks whether a variable num is
// positive, negative, or zero. Print the appropriate message accordingly.
let num;
if (num > 0) {
  console.log("The number is positive.");
} else if (num < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

// Question 2
// Write a JavaScript function called getDiscount that takes a purchase
// amount as an argument. If the purchase amount is greater than $100, apply a 10%
// discount. If it is less than or equal to $100, apply a 5% discount. Return the
// discounted amount.
function getDiscount(purchaseAmount) {
  if (purchaseAmount > 100) {
    return purchaseAmount * 0.9; // Apply 10% discount
  } else {
    return purchaseAmount * 0.95; // Apply 5% discount
  }
}
// Question 3
// Write an if-else statement that checks whether a year is a leap year.
// Print "Leap year" if it is divisible by 4 but not divisible by 100, or if it is divisible
// by 400. Otherwise, print "Not a leap year"
let year;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("Leap year");
} else {
  console.log("Not a leap year");
}