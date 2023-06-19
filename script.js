const form = document.querySelector("form");
const email = document.getElementById("email");
const error = document.getElementById("error");
form.addEventListener("submit", handleFormSubmit);

email.addEventListener("invalid", (e) => {
  e.preventDefault();

  error.textContent = "Valid email required";
  error.style.display = "block";

});

function handleFormSubmit(event) {
  event.preventDefault();

  const emailInput = document.querySelector("#email");
  const email = emailInput.value;

  if (validateEmail(email)) {
    const container = document.querySelector(".container");
    container.style.display = "none";

// document.getElementById("form").addEventListener("submit", (e) => {
//   for (var i = 0; i < document.querySelectorAll("#form input").length; i++) {
//     if (document.querySelectorAll("form input")[i].value === "") {
//       e.preventDefault();

//       document.querySelectorAll("form input")[i].style.backgroundColor = "pink";
//       document.querySelectorAll("form input")[i].placeholder = "Required";
//     } else {
//       document.querySelectorAll("form input")[i].style.backgroundColor =
//         "#fff";
//     }
//   }
// });

    const successContainer = document.querySelector(".container-2");
    successContainer.classList.remove("hidden");

     const emailParagraph = successContainer.querySelector(".confirm-msg");
     emailParagraph.innerHTML = `A confirmation email has been sent to <span class='user-email'>${email}</span>. Please open it and click the button inside to confirm your subscription.`;

    const dismissButton = successContainer.querySelector("button");
    dismissButton.addEventListener("click", function () {
      window.location.reload();
    });
  }
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function handleDismissButtonClick() {
  const successContainer = document.querySelector(".container-2");
  successContainer.style.display = "none";
}

