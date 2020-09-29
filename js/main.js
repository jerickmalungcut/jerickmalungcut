const textArray = ["Front End Web Developer", "Web Designer", "Graphic Artist", "Logo Designer", "Computer Technician", "Gamer"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

const typedText = document.querySelector(".typed-text");
const cursorBlink = document.querySelector(".cursor");

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorBlink.classList.contains("typing")) {  //To stop the blinking when typing
      cursorBlink.classList.add("typing");
    }

    typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  }
  else {
    cursorBlink.classList.remove("typing"); //To stop the blinking when typing

    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  }
  else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) {
      textArrayIndex = 0;
    }
    setTimeout(type, typingDelay + 1100);
  }
}


document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, newTextDelay + 250);
})
