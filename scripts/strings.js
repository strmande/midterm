// Strings
// Question 1
// Given the string "Hello, World!", write code to convert it to
// uppercase and store the result in a variable called uppercaseString.
let str = "Hello, World!";
let uppercaseString = str.toUpperCase();

console.log(uppercaseString);
// Question 2
// Write a JavaScript function called countVowels that takes a string as
// an argument and returns the number of vowels present in the string
function countVowels(str) {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];

  // Convert string to lowercase to handle both uppercase and lowercase vowels
  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
// Question 3
// Write a JavaScript function called truncateString that takes a string
// and a number maxLength as arguments and returns a truncated version of the
// string if it exceeds maxLength, appending an ellipsis ("...") at the end.
function truncateString(str, maxLength) {
  if (str.length <= maxLength) {
    return str; // Return the original string if it's within or equal to maxLength
  } else {
    return str.slice(0, maxLength) + "..."; // Truncate the string and append ellipsis
  }
}