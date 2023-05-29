const loginBtn = document.getElementById('login-btn');
const signUpBtn = document.getElementById('signup-btn');
const usernameDiv = document.getElementById('username-div');
const confirmPasswordDiv = document.getElementById('confirm-password-div');
const username = document.forms["login-form"]["username"].value;
const email =  document.getElementById("email").value;
const password = document.forms["login-form"]["password"].value;
const confirmPassword = document.forms["login-form"]["confirm-password"].value;
const cardTitle = document.getElementById("card-title");


console.log(email);
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
 document.getElementById('login-form').addEventListener("click", () => {
          console.log(email.length);
        if (email.trim().length == 0 || null) {
            const emailError = document.createElement("p");
            emailError.innerText = 'Please enter your email';
            emailError.style.color = 'red';
            const emailDiv = document.getElementById('email-div');
            emailDiv.appendChild(emailError);
            const emailInput = document.getElementById('email')
            emailInput.addEventListener("keydown",(event)=>{
                    event.preventDefault();
                    console.log(email.value);
                    emailError.parentNode.removeChild(emailError);
                    
            });
            if(email.trim().length !== 0){
                console.log(email);
                emailInput.removeEventListener("keydown",()=>{});
            }
            if(email.trim().length === 0){
                console.log(email);
                emailDiv.replaceChild(emailError,emailDiv.childNodes[4]);
            }
            
        }else{
            return;
        }
    })

}