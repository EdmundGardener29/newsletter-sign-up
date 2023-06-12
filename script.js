const form = document.getElementById("form");
const button = document.querySelector(".submit");



const handleSubmit = () => { 
  

  const emailInput = document.getElementById("email");
  const email = emailInput.value.trim();

  if (validateEmail(email)) {

    window.location.href = "success.html";

    return;
  } else {

    alert("Please enter a valid email address.");
  }
}
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
