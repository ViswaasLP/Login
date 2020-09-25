const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const first = document.getElementById('first');
const last = document.getElementById('last');

const firsterror = document.getElementById('firstName');
const lasterror = document.getElementById('lastName');
const usererror = document.getElementById('user');
const passerror = document.getElementById('pass');
const pass2error = document.getElementById('confirmPassword');

firstpass = 0;
lastpass = 0;
userpass = 0;
passpass = 0;
pass2pass = 0;

// errorcase() handles the case when the form fields are invalid.
function errorcase(input, message, mode){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control ' + mode;
};

//checkInputs() checks if the form fields contain valid/invalid inputs.
function checkInputs(){
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();  
    const firstValue = first.value.trim();  
    const lastVaiue = last.value.trim();  


    if (usernameValue === ''){
        errorcase(username, "ERROR: Username cannot be empty.", "blank")
        usererror.setAttribute('aria-hidden', 'false');
        userpass = 0;
    }else{
        successcase(username);
        usererror.setAttribute('aria-hidden', 'true');
        userpass = 1;
    }


    if (firstValue === ''){
        errorcase(first, "ERROR: First name cannot be empty.", "blank")
        firsterror.setAttribute('aria-hidden', 'false');
        firstpass = 0;
    }else{
        successcase(first);
        firsterror.setAttribute('aria-hidden', 'true');
        firstpass = 1;
    } 
    
    
    if (lastVaiue === ''){
        errorcase(last, "ERROR: Last name cannot be empty.", "blank")
        lasterror.setAttribute('aria-hidden', 'false');
        lastpass = 0;
    }else{
        successcase(last);
        lasterror.setAttribute('aria-hidden', 'true');
        lastpass = 1;
    }


    islow = /[a-z]/.test(passwordValue);
    isup = /[A-Z]/.test(passwordValue);
    isnum = /[0-9]/.test(passwordValue)
    passwordLength = passwordValue.length;

    if(passwordValue === '') {
        errorcase(password, 'ERROR: Password cannot be blank', "blank");
        passerror.setAttribute('aria-hidden', 'false');
        passpass = 0;
	}else if(!(islow)){
        errorcase(password, 'ERROR: Password does not have lowercase letters', "nolow");
        passerror.setAttribute('aria-hidden', 'false');
        passpass = 0;
    }else if(!(isup)){
        errorcase(password, 'ERROR: Password does not have uppercase letters', "noup");
        passerror.setAttribute('aria-hidden', 'false');
        passpass = 0;
    }else if(!(isnum)){
        errorcase(password, 'ERROR: Password does not have numbers', "nonum");
        passerror.setAttribute('aria-hidden', 'false');
        passpass = 0;
    }else if(passwordLength<8){
        errorcase(password, 'ERROR: Password must be equal or greater than 8 characters', "noeight");
        passerror.setAttribute('aria-hidden', 'false');
        passpass = 0;
    }   else {
        successcase(password);
        passerror.setAttribute('aria-hidden', 'true');
        passpass = 1;
	}
	
	if(password2Value === '') {
        errorcase(password2, 'ERROR: Please confirm password', "blank");
        pass2error.setAttribute('aria-hidden', 'false');
        pass2pass = 0;
	} else if(passwordValue !== password2Value) {
        errorcase(password2, 'ERROR: Passwords do not match', "nomatch");
        pass2error.setAttribute('aria-hidden', 'false');
        pass2pass = 0;
	} else{
        successcase(password2);
        pass2pass = 1;
        if(userpass === 1 && lastpass === 1 && firstpass === 1 && passpass === 1 && pass2pass === 1 ){
            alert("Sign Up successful! However, please use 'level' and 'Access123'");
        }
        pass2error.setAttribute('aria-hidden', 'true');
	}
};

// successcase() is the case when the form field is valid
function successcase(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = '';
    formControl.className = 'form-control success';
    
}
	

form.addEventListener('submit', e => {
	e.preventDefault();
    if(userpass === 1 && lastpass === 1 && firstpass === 1 && passpass === 1 && pass2pass === 1 ){
        alert("Sign Up successful! However, please use 'level' and 'Access123' when logging in.");
    }
	checkInputs();
});
