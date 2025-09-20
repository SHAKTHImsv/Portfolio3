// Typing animation
const words = ["Full Stack Developer", "UI/UX Designer", "Programmer", "Student"];
const typingElement = document.getElementById("typing");
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  const currentText = currentWord.substring(0, charIndex);
  typingElement.textContent = currentText;

  let typingSpeed = 200; // normal typing speed

  if (isDeleting) {
    typingSpeed = 100; // faster while deleting
  }

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
  } else {
    // finished word
    if (!isDeleting) {
      isDeleting = true;
      typingSpeed = 2000; // pause before deleting
    } else {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length; // next word
      typingSpeed = 500; // pause before typing next
    }
  }

  setTimeout(typeEffect, typingSpeed);
}

// start typing when DOM is ready
document.addEventListener("DOMContentLoaded", typeEffect);
