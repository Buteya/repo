const loginBtn = document.getElementById('login-btn');
const signUpBtn = document.getElementById('signup-btn');
const usernameDiv = document.getElementById('username-div');
const confirmPasswordDiv = document.getElementById('confirm-password-div');

// setup form validation
const login = ()=>{
    usernameDiv.style.display = 'none';
    confirmPasswordDiv.style.display = 'none';
}

const signUp = ()=>{
    usernameDiv.style.display = 'block';
    confirmPasswordDiv.style.display = 'block';
    loginBtn.classList.remove("btn-primary");
    loginBtn.classList.add("btn-outline-primary");
    signUpBtn.classList.remove("btn-outline-primary");
    signUpBtn.classList.add("btn-primary");
}