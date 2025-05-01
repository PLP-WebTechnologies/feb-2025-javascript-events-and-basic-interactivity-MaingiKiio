
document.addEventListener("DOMContentLoaded", () => {
  // Form Validation
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const feedback = document.getElementById("feedback");

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener("submit", e => {
    e.preventDefault();
    let valid = true;

    if (!nameInput.value.trim()) {
      nameInput.classList.add("invalid");
      valid = false;
    } else {
      nameInput.classList.remove("invalid");
    }

    if (!validateEmail(emailInput.value)) {
      emailInput.classList.add("invalid");
      valid = false;
    } else {
      emailInput.classList.remove("invalid");
    }

    if (!messageInput.value.trim()) {
      messageInput.classList.add("invalid");
      valid = false;
    } else {
      messageInput.classList.remove("invalid");
    }

    if (valid) {
      feedback.textContent = "Message sent successfully!";
      form.reset();
    } else {
      feedback.textContent = "Please fill in all required fields.";
    }
  });
});
