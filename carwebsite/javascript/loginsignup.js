const loginBtn = document.getElementById('login-btn');
const signUpBtn = document.getElementById('signup-btn');
const usernameDiv = document.getElementById('username-div');
const confirmPasswordDiv = document.getElementById('confirm-password-div');
const username = document.forms["login-form"]["username"].value;
const email = document.forms["login-form"]["email"].value;
const password = document.forms["login-form"]["password"].value;
const confirmPassword = document.forms["login-form"]["confirm-password"].value;

let loggingIn = false;
const swithForm = ()=>{
        signUpBtn.addEventListener('click',()=>{
            console.log(loggingIn)
            if(!loggingIn){
                 usernameDiv.style.display = 'block';
            confirmPasswordDiv.style.display = 'block';
            loggingIn = !loggingIn;
            }else{
               usernameDiv.style.display = 'none';
                confirmPasswordDiv.style.display = 'none';
            loggingIn = !loggingIn;
            } 
        })
}

// setup form validation
const login = ()=>{
    usernameDiv.style.display = 'none';
    confirmPasswordDiv.style.display = 'none';
    loginBtn.classList.add("btn-primary");
    loginBtn.classList.remove("btn-outline-primary");
    signUpBtn.classList.remove("btn-primary");
    signUpBtn.classList.add("btn-outline-primary"); 
    logingin += !logingin;
    setTimeout(()=>validateForm(),500);
}

const signUp = ()=>{
    usernameDiv.style.display = 'block';
    confirmPasswordDiv.style.display = 'block';
    loginBtn.classList.remove("btn-primary");
    loginBtn.classList.add("btn-outline-primary");
    signUpBtn.classList.remove("btn-outline-primary");
    signUpBtn.classList.add("btn-primary");
    signingup += !signingup;
   setTimeout(()=>validateForm(),500);
}

const validateForm = ()=>{
    if(logingin){
        if(email == "" && password == ""){
            alert("Email and Password is required");
        }else if(email == ""){
            alert("Email is required");
        }else if(password == ""){
            alert("Password is required");
        }
    }
    if(signingup){
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