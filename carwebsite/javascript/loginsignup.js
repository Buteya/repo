const loginBtn = document.getElementById('login-btn');
const signUpBtn = document.getElementById('signup-btn');
const usernameDiv = document.getElementById('username-div');
const confirmPasswordDiv = document.getElementById('confirm-password-div');
const username = document.forms["login-form"]["username"].value;
const email = document.forms["login-form"]["email"].value;
const password = document.forms["login-form"]["password"].value;
const confirmPassword = document.forms["login-form"]["confirm-password"].value;
const cardTitle = document.getElementById("card-title");

let loggingIn = false;
const swithForm = ()=>{
            console.log(loggingIn)
            if(!loggingIn){
                cardTitle.innerHTML = 'Sign Up';
                usernameDiv.style.display = 'block';
                confirmPasswordDiv.style.display = 'block';
                signUpBtn.textContent = 'Login';
                loginBtn.textContent = 'Sign Up';
                loggingIn = !loggingIn;
            }else{
                cardTitle.innerHTML = 'Login';
                usernameDiv.style.display = 'none';
                confirmPasswordDiv.style.display = 'none';
                signUpBtn.textContent = 'Sign Up';
                loginBtn.textContent = 'Login';
                loggingIn = !loggingIn;
            } 
}

// setup form validation
const validateForm = ()=>{
    if(loggingIn){
        if(email == "" && password == ""){
            alert("Email and Password is required");
        }else if(email == ""){
            alert("Email is required");
        }else if(password == ""){
            alert("Password is required");
        }
    }
    if(!loggingIn){
        if(username == "" && email == "" && password == ""){
        alert("Username, Email and Password must be filled out");
    }else if(username == ""){
        alert("Username must be filled in");
    }else if(email == ""){
        alert("Email must be filled out");
    }else if(password == ""){
        alert("Password must be filled out");
    }else if(confirmPassword == ""){
        alert("Confirm Password must be filled out");
    }
    }  
}