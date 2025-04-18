
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

    if (!isDeleting && charIndex < currentWord.length) {
      charIndex++;
      setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, 100);
    } else {
      if (!isDeleting) {
        isDeleting = true;
        setTimeout(typeEffect, 2000); // pause before deleting
      } else {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 500); // pause before typing next word
      }
    }
  }

  typeEffect();

