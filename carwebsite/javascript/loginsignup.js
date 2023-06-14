const loginBtn = document.getElementById('login-btn');
const signUpBtn = document.getElementById('signup-btn');
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const cardTitle = document.getElementById("card-title");
const usernameDiv = document.getElementById('username-div');
const emailDiv = document.getElementById('email-div');
const passwordDiv = document.getElementById('password-div');
const confirmPasswordDiv = document.getElementById('confirm-password-div');
const usernameArray = [];
const emailArray = [];
const passwordArray = [];
const confirmPasswordArray = [];
let loggingIn = false;


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
    const usernameError = document.createElement("p");
    const emailError = document.createElement("p");
    const passwordError = document.createElement("p");
    const confirmPasswordError = document.createElement("p");
    if (loggingIn) {
        document.getElementById('login-form').addEventListener("click", () => {
            if (usernameArray.length == 0 || null) {
                usernameError.innerText = 'Please enter your username';
                usernameError.style.color = 'red';
                usernameDiv.append(usernameError);
                username.addEventListener('keypress', (event) => {
                    usernameError.style.display = 'none';
                    console.log('Key pressed username:', event.key);
                    usernameArray.push(event.target.value);
                });

            }
            if (emailError.length < 1) {
                if (emailArray.length == 0 || null) {
                    emailError.innerText = 'Please enter your email';
                    emailError.style.color = 'red';
                    emailDiv.appendChild(emailError);
                    email.addEventListener('keypress', (event) => {
                        emailError.style.display = 'none';
                        console.log('Key pressed email:', event.key);
                        emailArray.push(event.target.value);
                    });
                }
            }
            if (passwordError.length < 1) {
                if (passwordArray.length == 0 || null) {
                    passwordError.innerText = 'Please enter your password';
                    passwordError.style.color = 'red';
                    passwordDiv.appendChild(passwordError);
                    password.addEventListener('keypress', (event) => {
                        passwordError.style.display = 'none';
                        console.log('Key pressed password:', event.key);
                        passwordArray.push(event.target.value);
                    })
                }
            }
            if (confirmPasswordArray.length == 0 || null) {
                confirmPasswordError.innerText = 'Please confirm your password';
                confirmPasswordError.style.color = 'red';
                confirmPasswordDiv.appendChild(confirmPasswordError);
                confirmPassword.addEventListener('keypress', (event) => {
                    confirmPasswordError.style.display = 'none';
                    console.log('Key pressed confirm password:', event.key);
                    confirmPasswordArray.push(event.target.value);
                })
            }

        })
    } else {
        document.getElementById('login-form').addEventListener("click", () => {
            if (emailArray.length == 0 || null) {
                emailError.innerText = 'Please enter your email';
                emailError.style.color = 'red';
                emailDiv.appendChild(emailError);
                email.addEventListener('keypress', (event) => {
                    emailError.style.display = 'none';
                    console.log('Key pressed email:', event.key);
                    emailArray.push(event.target.value);
                });
            }

            if (passwordArray.length == 0 || null) {
                passwordError.innerText = 'Please enter your password';
                passwordError.style.color = 'red';
                passwordDiv.appendChild(passwordError);
                password.addEventListener('keypress', (event) => {
                    passwordError.style.display = 'none';
                    console.log('Key pressed password:', event.key);
                    passwordArray.push(event.target.value);
                })
            }

        })
    }
}