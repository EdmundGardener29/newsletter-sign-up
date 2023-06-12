const form = document.getElementById("form");
const button = document.querySelector(".submit");
const success = document.getElementById("success");
const dismisbtn = document.getElementById("dismissbtn");
const errorMessage = document.getElementById("error-message");


const handleSubmit = () => {
  

  const emailInput = document.getElementById("email");
  const email = emailInput.value.trim();

  if (validateEmail(email)) {

    window.location.href = "success.html";

    return;
  } else {

     alert("This email is invalid.");
  }
    
  dismisbtn.addEventListener('click', function () {
    success.remove();
  })
  console.log(success);
}


function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}


// function handleSubmit(event) {

//   const emailInput = document.getElementById("email");
//   const email = emailInput.value;

//   if (validateEmail(email)) {
//     // Clear any existing error message
//     document.getElementById("error-message").textContent = "";

//     // Form submission logic here
//     window.location.href = "success.html";
//   } else {
//     // Display the error message in the form space
//     document.getElementById("error-message").textContent =
//       "Invalid email format.";
//   }
// }



// function validateEmail(email) {
//   // Regular expression pattern to validate email format
//   var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   return pattern.test(email);
// }
