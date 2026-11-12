
// =============================
// BODA - PERSONAL WEBSITE
// JAVASCRIPT
// =============================

console.log("🔥 Welcome to BODA Website!");

// 1. SCROLL REVEAL

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

sections.forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});


// 2. TYPING ANIMATION

const words = [
  "PYTHON DEVELOPER",
  "WEB DEVELOPER",
  "PROGRAMMER",
  "FUTURE DEVELOPER"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

  if (!typing) return;

  const currentWord = words[wordIndex];

  typing.textContent = currentWord.substring(0, charIndex);

  if (!deleting) {

    charIndex++;

    if (charIndex > currentWord.length) {

      deleting = true;

      setTimeout(typeEffect, 1300);
      return;
    }

  } else {

    charIndex--;

    if (charIndex < 0) {

      deleting = false;
      charIndex = 0;

      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, deleting ? 55 : 100);
}

typeEffect();


// 3. NAVIGATION ACTIVE EFFECT

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {

  link.addEventListener("click", () => {

    navLinks.forEach((item) => {
      item.classList.remove("active");
    });

    link.classList.add("active");

  });

});


// 4. PROJECT CARDS EFFECT

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card, index) => {

  card.style.transitionDelay = `${index * 100}ms`;

});


// 5. CURRENT YEAR

const footer = document.querySelector("footer p");

if (footer) {
  footer.textContent =
    `© ${new Date().getFullYear()} BODA - All Rights Reserved`;
}


// 6. WEBSITE READY

console.log("✅ BODA Website is Ready!");
console.log("💻 Keep Learning. Keep Coding.");
