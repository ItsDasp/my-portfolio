export function handleParallax() {
  const scrolled = window.pageYOffset;
  const parallaxBg = document.querySelector(".parallax-bg");
  const maxTranslate = 0; 

  let speed = scrolled * 0.3;
  if (speed > maxTranslate) speed = maxTranslate;

  parallaxBg.style.transform = `translateY(${speed}px)`;
}