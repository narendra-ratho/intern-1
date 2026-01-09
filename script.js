
document.addEventListener("DOMContentLoaded", function () {

  const words = ["Suzuki Bikes..", "Ride the Power.."];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const textElement = document.getElementById("type-text");
    if (!textElement) return; // safety check

    const currentWord = words[wordIndex];

    if (!isDeleting) {
      textElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentWord.length) {
        setTimeout(() => isDeleting = true, 1200);
      }
    } else {
      textElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }

    setTimeout(typeEffect, isDeleting ? 80 : 120);
  }

  typeEffect();
});
