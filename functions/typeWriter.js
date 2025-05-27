export function typeWriter(element, text, speed = 50) {
  return new Promise((resolve) => {
    let i = 0;
    element.innerHTML = "";

    const textSpan = document.createElement("span");
    const cursorSpan = document.createElement("span");
    cursorSpan.classList.add("cursor");
    cursorSpan.textContent = "|";

    element.appendChild(textSpan);
    element.appendChild(cursorSpan);

    function type() {
      if (i < text.length) {
        textSpan.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        cursorSpan.remove();
        resolve();
      }
    }
    type();
  });
}
