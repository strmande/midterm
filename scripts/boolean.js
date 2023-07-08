// Boolean
// Question 1
// Write a condition that checks whether a variable isRaining is true and
// a variable isSunny is false. Store the result in a variable called shouldStayInside.
let isRaining = true;
let isSunny = false;

let shouldStayInside = isRaining && !isSunny;
// Question 2
// Write a JavaScript function called hasPermission that takes two
// boolean parameters, isUserLoggedIn and isAdmin, and returns true if the user has
// permission and false otherwise.
function hasPermission(isUserLoggedIn, isAdmin) {
  return isUserLoggedIn && isAdmin;
}
let userLoggedIn = true;
let userIsAdmin = false;

let permission = hasPermission(userLoggedIn, userIsAdmin);
console.log(permission);
// Question 3
// Write a JavaScript function called hasUniqueCharacters that takes a
// string as an argument and returns true if all characters in the string are unique and
// false otherwise.
function hasUniqueCharacters(str) {
  let charMap = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (charMap[char]) {
      return false; // Character already encountered, not unique
    }
    charMap[char] = true; // Mark character as encountered
  }

  return true; // All characters are unique
}