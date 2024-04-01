const passwordInput = document.getElementById("password");
const toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleButton.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    toggleButton.textContent = "Show";
  }
});
