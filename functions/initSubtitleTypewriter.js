import { typeWriter } from "./typeWriter.js";

export function initSubtitleTypewriter() {
  const subtitle = document.getElementById("subtitle");
  const text = "Building things, breaking things, learning all the time.";

  setTimeout(() => {
    typeWriter(subtitle, text, 120).then(() => {
      subtitle.classList.add("typing-complete");
    });
  }, 2500);
}
