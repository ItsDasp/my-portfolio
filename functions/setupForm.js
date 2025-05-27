export function setupForm() {
  const form = document.querySelector(".contact-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const submitBtn = form.querySelector(".submit-btn");
    submitBtn.textContent = "Message Sent!";
    submitBtn.style.background = "linear-gradient(45deg, #32cd32, #228b22)";

    setTimeout(() => {
      submitBtn.textContent = "Send Message";
      submitBtn.style.background = "linear-gradient(45deg, #8a2be2, #9932cc)";
      form.reset();
    }, 3000);
  });
}
