// Typewriting Effect
const dynamicText = document.querySelector("h1 span");
const words = ["A Developer.", "A Learner." , "A Coder." , "An Explorer."];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
   const currentWord = words[wordIndex];
   const currentChar = currentWord.substring(0, charIndex);
   dynamicText.textContent = currentChar;

   if (!isDeleting && charIndex < currentWord.length) {
      // If condition is true, type the next character
      charIndex++;
      setTimeout(typeEffect, 150);
   } else if (isDeleting && charIndex > 1) {
      // If condition is true, remove the previous character
      charIndex--;
      setTimeout(typeEffect, 80);
   } else {
      // If word is deleted then switch to the next word
      isDeleting = !isDeleting;
      wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
      setTimeout(typeEffect, 500);
   }
}

typeEffect();