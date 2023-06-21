const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const invalidEmailMsg = document.getElementById("invalid-email");
const confirmedMessage = document.getElementById("confirmed-message");
const userEmailAddress = document.getElementById("user-email");
const dismissBtn = document.getElementById("dismiss-btn");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!validateEmail(emailInput.value)) {
    invalidEmailMsg.style.display = "block";
    return;
  }

  invalidEmailMsg.style.display = "none";

  confirmedMessage.style.display = "block";
  document.getElementById("container").style.display = "none";
  userEmailAddress.textContent = emailInput.value;

  confirmedMessage.classList.remove("hide");
});

dismissBtn.addEventListener("click", function () {
  confirmedMessage.style.display = "none";
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

 

function dismissMessage() {
  successMessage.classList.add("hide");
}

const dismissButton = confirmedMessage.querySelector("button");
dismissButton.addEventListener("click", function () {
  window.location.reload();
});
