const loginBtn = document.getElementById('login-btn');
const signUpBtn = document.getElementById('signup-btn');
const usernameDiv = document.getElementById('username-div');
const confirmPasswordDiv = document.getElementById('confirm-password-div');
const username = document.forms["login-form"]["username"].value;
const email =  document.getElementById("email");
const password = document.forms["login-form"]["password"].value;
const confirmPassword = document.forms["login-form"]["confirm-password"].value;
const cardTitle = document.getElementById("card-title");
const emailError = document.createElement("p");
const emailDiv = document.getElementById('email-div');
const emailArray = [];
let loggingIn = false;

email.addEventListener('keypress',(event) => {
    emailError.style.display = 'none';
    console.log('Key pressed:', event.key);
    emailArray.push(event.target.value);
    
  });
  

const swithForm = () => {
    console.log(loggingIn)
    if (!loggingIn) {
        cardTitle.innerHTML = 'Sign Up';
        usernameDiv.style.display = 'block';
        confirmPasswordDiv.style.display = 'block';
        signUpBtn.textContent = 'Login';
        loginBtn.textContent = 'Sign Up';
        loggingIn = !loggingIn;
    } else {
        cardTitle.innerHTML = 'Login';
        usernameDiv.style.display = 'none';
        confirmPasswordDiv.style.display = 'none';
        signUpBtn.textContent = 'Sign Up';
        loginBtn.textContent = 'Login';
        loggingIn = !loggingIn;
    }
}

// setup form validation
const validateForm = () => {
 document.getElementById('login-form').addEventListener("click", () => {
          console.log(email.length);
        if (emailArray.length == 0 || null) {
            emailError.innerText = 'Please enter your email';
            emailError.style.color = 'red';
            emailDiv.appendChild(emailError);
        }
    })

}