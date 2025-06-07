import { createParticles } from "./createParticles.js";
import { handleParallax } from "./handleParallax.js";
import { initSubtitleTypewriter } from "./initSubtitleTypewriter.js";
import { initAboutTypewriter } from "./initAboutTypewriter.js";
import { setupIntersectionObserver } from "./setupIntersectionObserver.js";
import { setupSmoothScrolling } from "./setupSmoothScrolling.js";
import { setupForm } from "./setupForm.js";
import { carouselSkills } from "./carouselSkills.js";

document.addEventListener("DOMContentLoaded", () => {
  createParticles();
  setupIntersectionObserver();
  setupSmoothScrolling();
  setupForm();
  initSubtitleTypewriter();
  initAboutTypewriter();
  carouselSkills();
});

window.addEventListener("scroll", handleParallax);

document.querySelector(".scroll-indicator").addEventListener("click", () => {
  document.querySelector("#about").scrollIntoView({
    behavior: "smooth",
  });
});
