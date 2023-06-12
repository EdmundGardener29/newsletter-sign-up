const form = document.querySelector("form-control");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkInput();
});

function input() {
  const email = email.value.trim();

  if (email === "") {
    setErrorFor(email);
  } else {
    setSuccessFor(email);
  }
}
