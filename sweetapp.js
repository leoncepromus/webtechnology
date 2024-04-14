const myCnameError = document.getElementById("myCnameError");
const myFnameError = document.getElementById("myFnameError");
const myUnameError = document.getElementById("myUnameError");
const myPasscode = document.getElementById("myPasscodeError");

const passwordInput = document.getElementById("password");
const toggleButton = document.getElementById("toggleButton");
const submitError = document.getElementById('submit-error');

toggleButton.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleButton.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    toggleButton.textContent = "Show";
  }
});

function validateContName() {
  let myCname = document.getElementById("myCname").value;
  let matchReg = myCname.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/);
  
  if (myCname.trim().length <=8 || myCname.matchReg) {
    myCnameError.innerHTML = `<i class="fas fa-times-circle"></i>`;
    return false;
  }
  else {
    myCnameError.innerHTML = '<i class="fa fa-check-circle"></i>'; // Show error message with x-mark
    return true;
  }
}

function validateFullName() {
  let myFullname = document.getElementById("myFname");
 
  if (myFname.value.trim().length < 0) {
    myFnameError.innerHTML = `<i class="fas fa-times-circle"></i>`;
    return false;
  } else {
    myFnameError.innerHTML = '<i class="fa fa-check-circle"></i>'; // Show error message with x-mark
    return true;
  }
}

function validateUserName() {
  let myUserName = document.getElementById("myUname");
  if (myUserName.value.trim().length < 8) {
    myUnameError.innerHTML = `<i class="fas fa-times-circle"></i>`;
    return false;
  } else {
    myUnameError.innerHTML = '<i class="fa fa-check-circle"></i> '; // Show error message with x-mark
    return true;
  }
}

function validatePassCode() {
  let myPass = document.getElementById("myPasscode");
  let togglePass = document.querySelector(".pass");
  if (myPass.value.trim().length <= 6) {
   togglePass.style.borderColor = "black"; // Set border color to green for valid input
    return false;
  } else {
    togglePass.style.borderColor = "green"; // Set border color to green for valid input
    return true;
  }
}


function validateForm() {
  if (!validateContName() || !validateFullName() || !validateUserName() || !validatePassCode())  {
    submitError.style.display = "block";
    submitError.innerHTML = `Fix errors before submission`;
    setTimeout(function(){
        submitError.style.display = "none";
    },3000)
    return false;
  }
}
