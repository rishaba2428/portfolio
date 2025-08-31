// Handle contact form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && phone && message) {
    document.getElementById("formResponse").innerText =
      `✅ Thank you, ${name}! I will contact you soon at ${email}.`;
    this.reset();
  } else {
    document.getElementById("formResponse").innerText =
      "⚠️ Please fill out all fields.";
  }
});