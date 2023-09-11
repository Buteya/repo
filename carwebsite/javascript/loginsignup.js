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
    let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (loggingIn) {
        console.log(loggingIn);
        if (email.value == "") {
            erroremail.innerText = 'Please enter your email';
            erroremail.style.color = 'red';
            emailDiv.appendChild(erroremail);
            emailDiv.addEventListener('click', () =>{
                emailDiv.removeChild(erroremail);
                console.log(email.value);
            });
        }
        else if(email.value != regex){
            erroremail.innerText = 'Please enter a valid email';
            erroremail.style.color = 'red';
            emailDiv.appendChild(erroremail);
            emailDiv.addEventListener('click', () =>{
                emailDiv.removeChild(erroremail);
                console.log(email.value);
            });
        }
        if (password.value == "") {
            errorpassword.innerText = 'Please enter your password';
            errorpassword.style.color = 'red';
            passwordDiv.appendChild(errorpassword);
            setTimeout(() => {
                passwordDiv.removeChild(errorpassword);
            }, 1000);
        }  
        loggingIn = !loggingIn;
    }  
    if(!loggingIn) {
        console.log(loggingIn);
        if (username.value == "") {
            errorusername.innerText = 'Please enter your username';
            errorusername.style.color = 'red';
            usernameDiv.appendChild(errorusername);
            usernameDiv.addEventListener('click',()=>{
                usernameDiv.removeChild(errorusername);
                console.log(username.value);
            });
        }
        if (email.value == "") {
            erroremail.innerText = 'Please enter your email';
            erroremail.style.color = 'red';
            emailDiv.appendChild(erroremail);
            emailDiv.addEventListener('click',()=>{
                emailDiv.removeChild(erroremail);
                console.log(email.value);
            });
           
        }   
        else if(email.value !== regex){
            erroremail.innerText = 'Please enter a valid email';
            erroremail.style.color = 'red';
            emailDiv.appendChild(erroremail);
            emailDiv.addEventListener('click',()=>{
                emailDiv.removeChild(erroremail);
                console.log(email.value);
            });
        }
        if (password.value == "") {
            errorpassword.innerText = 'Please enter your password';
            errorpassword.style.color = 'red';
            passwordDiv.appendChild(errorpassword);
            passwordDiv.addEventListener('click',()=>{
                passwordDiv.removeChild(errorpassword);
                console.log(password.value);
            });
        }
        if (confirmpassword.value == "") {
            errorconfirmpassword.innerText = 'Please enter your confirm password';
            errorconfirmpassword.style.color = 'red';
            confirmPasswordDiv.appendChild(errorconfirmpassword);
            confirmPasswordDiv.addEventListener('click',()=>{
                confirmPasswordDiv.removeChild(errorconfirmpassword);
                console.log(confirmpassword.value);
            });
        }
        else if (confirmpassword.value !== password.value){
            errorconfirmpassword.innerText = 'passwords dont match';
            errorconfirmpassword.style.color = 'red';
            confirmPasswordDiv.appendChild(errorconfirmpassword);
            confirmPasswordDiv.addEventListener('click',()=>{
                confirmPasswordDiv.removeChild(errorconfirmpassword);
                console.log(confirmpassword.value);
            });
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