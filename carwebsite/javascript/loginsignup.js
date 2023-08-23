const loginBtn = document.getElementById('login-btn');
const signUpBtn = document.getElementById('signup-btn');
let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmpassword = document.getElementById('confirm-password');
const cardTitle = document.getElementById("card-title");
const usernameDiv = document.getElementById('username-div');
const emailDiv = document.getElementById('email-div');
const passwordDiv = document.getElementById('password-div');
const confirmPasswordDiv = document.getElementById('confirm-password-div');
const errorusername = document.createElement('p');
const erroremail = document.createElement('p');
const errorpassword = document.createElement('p');
const errorconfirmpassword = document.createElement('p');
let loggingIn = true;


const swithForm = () => {
    console.log(loggingIn)
    if (loggingIn) {
        cardTitle.innerHTML = 'Login';
        usernameDiv.style.display = 'none';
        confirmPasswordDiv.style.display = 'none';
        signUpBtn.textContent = 'Sign Up';
        loginBtn.textContent = 'Login';
        loggingIn = !loggingIn;
    } else {
        cardTitle.innerHTML = 'Sign Up';
        usernameDiv.style.display = 'block';
        confirmPasswordDiv.style.display = 'block';
        signUpBtn.textContent = 'Login';
        loginBtn.textContent = 'Sign Up';
        loggingIn = !loggingIn;
    }
}

//form validation
const validateform = () => {
    if (loggingIn) {
        loggingIn = !loggingIn;
        if (email.value == "") {
            erroremail.innerText = 'Please enter your email';
            erroremail.style.color = 'red';
            emailDiv.appendChild(erroremail);
            setTimeout(() => {
                emailDiv.removeChild(erroremail);
            }, 1000);
        }
        if (password.value == "") {
            errorpassword.innerText = 'Please enter your password';
            errorpassword.style.color = 'red';
            passwordDiv.appendChild(errorpassword);
            setTimeout(() => {
                passwordDiv.removeChild(errorpassword);
            }, 1000);
        }  
    }  
    if(!loggingIn) {

        if (username.value == "") {
            errorusername.innerText = 'Please enter your username';
            errorusername.style.color = 'red';
            usernameDiv.appendChild(errorusername);
            setTimeout(() => {
                usernameDiv.removeChild(errorusername);
            }, 1000);
        }
        if (email.value == "") {
            erroremail.innerText = 'Please enter your email';
            erroremail.style.color = 'red';
            emailDiv.appendChild(erroremail);
            setTimeout(() => {
                emailDiv.removeChild(erroremail);
            }, 1000);
        }
        if (password.value == "") {
            errorpassword.innerText = 'Please enter your password';
            errorpassword.style.color = 'red';
            passwordDiv.appendChild(errorpassword);
            setTimeout(() => {
                passwordDiv.removeChild(errorpassword);
            }, 1000);
        }
        if (confirmpassword.value == "") {
            errorconfirmpassword.innerText = 'Please enter your confirm password';
            errorconfirmpassword.style.color = 'red';
            confirmPasswordDiv.appendChild(errorconfirmpassword);
            setTimeout(() => {
                confirmPasswordDiv.removeChild(errorconfirmpassword);
            }, 1000);
        }
        loggingIn = !loggingIn;
    }

    console.log(username.value);
    console.log(email.value);
    console.log(password.value);
    console.log(confirmpassword.value)
    username.value = "";
    email.value = "";
    password.value = "";
    confirmpassword.value = "";
}