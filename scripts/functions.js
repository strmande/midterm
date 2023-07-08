// Functions
// Question 1
// Write a JavaScript function called reverseString that takes a string as
// an argument and returns the reversed version of the string.
function reverseString(str) {
    let reversed = "";
  
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
  
    return reversed;
  }
  // Question 2
  // Write a JavaScript function called calculateBMI that takes a person's
  // weight (in kilograms) and height (in meters) as arguments and returns their body
  // mass index (BMI).
  function calculateBMI(weight, height) {
    let bmi = weight / (height * height);
    return bmi;
  }
  // Question 3
  // Write a JavaScript function called capitalizeWords that takes a
  // sentence as an argument and returns the sentence with each word capitalized.
  function capitalizeWords(sentence) {
    let words = sentence.split(" ");
    let capitalizedSentence = "";
  
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
      capitalizedSentence += capitalizedWord + " ";
    }
  
    return capitalizedSentence.trim();
  }