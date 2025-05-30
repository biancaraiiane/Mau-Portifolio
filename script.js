import { gitHubIcon } from "./assets/icons/github.js";
import { linkedinIcon } from "./assets/icons/linkedin.js";
import { instagramIcon } from "./assets/icons/instagram.js";
import { homeIcon } from "./assets/icons/home.js";
import { aboutIcon } from "./assets/icons/about.js";
import { resumeIcon } from "./assets/icons/resume.js";
import { portifolioIcon } from "./assets/icons/portifolio.js";
import { contatoIcon } from "./assets/icons/contato.js";

const element = document.getElementById("text");
const fullText = element.textContent;
let index = 0;
let isDeleting = false;

const track = document.querySelector(".projects-track");
const cards = document.querySelectorAll(".project-card");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

let currentIndex = 0;

function getVisibleCards() {
  if (window.innerWidth <= 480) return 1;
  if (window.innerWidth <= 768) return 2;
  if (window.innerWidth <= 1024) return 3;
  return 4;
}

function updateCarousel() {
  const visibleCards = getVisibleCards();
  const cardWidth = cards[0].offsetWidth + 16;
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  const visibleCards = getVisibleCards();
  if (currentIndex < cards.length - visibleCards) {
    currentIndex++;
    updateCarousel();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

window.addEventListener("resize", () => {
  updateCarousel();
});

function typeEffect() {
  if (!isDeleting) {
    element.textContent = fullText.substring(0, index + 1);
    index++;
    if (index === fullText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 2000);
      return;
    }
  } else {
    element.textContent = fullText.substring(0, index - 1);
    index--;
    if (index === 0) {
      isDeleting = false;
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

element.textContent = "";
typeEffect();

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector(".sidebar");

  if (button && sidebar) {
    button.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });
    document.addEventListener("click", (e) => {
      const isClickInsideSidebar = sidebar.contains(e.target);
      const isClickOnButton = button.contains(e.target);

      if (!isClickInsideSidebar && !isClickOnButton) {
        sidebar.classList.remove("active");
      }
    });
  }
});

document.getElementById("gitHub").innerHTML = gitHubIcon;
document.getElementById("linkedin").innerHTML = linkedinIcon;
document.getElementById("instagram").innerHTML = instagramIcon;
document.getElementById(
  "home"
).innerHTML = `<span class="icon">${homeIcon}</span><span class="label">Inicio</span>`;
document.getElementById(
  "about"
).innerHTML = `<span class="icon">${aboutIcon}</span><span class="label">Sobre</span>`;
document.getElementById(
  "resume"
).innerHTML = `<span class="icon">${resumeIcon}</span><span class="label">Currículo</span>`;
document.getElementById(
  "portifolio"
).innerHTML = `<span class="icon">${portifolioIcon}</span><span class="label">Portfolio</span>`;
document.getElementById(
  "contato"
).innerHTML = `<span class="icon">${contatoIcon}</span><span class="label">Contato</span>`;
