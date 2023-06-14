const form = document.querySelector("form");
form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const emailInput = document.querySelector("#email");
  const email = emailInput.value;

  if (validateEmail(email)) {
    const container = document.querySelector(".container");
    container.style.display = "none";

    const successContainer = document.querySelector(".container-2");
    successContainer.classList.remove("hidden");

    const emailParagraph = successContainer.querySelector("p");
    emailParagraph.innerHTML = `A confirmation email has been sent to ${email}. Please open it and click the button inside to confirm your subscription.`;

    const dismissButton = successContainer.querySelector("button");
    dismissButton.addEventListener("click", handleDismissButtonClick);
  }
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function handleDismissButtonClick() {
  // Hide the success message
  const successContainer = document.querySelector(".container-2");
  successContainer.style.display = "none";
}
