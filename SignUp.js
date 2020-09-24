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

function setErrorFor(input, message, mode){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control ' + mode;
};

function checkInputs(){
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();  
    const firstValue = first.value.trim();  
    const lastVaiue = last.value.trim();  


    if (usernameValue === ''){
        setErrorFor(username, "ERROR: Username cannot be empty.", "blank")
        usererror.setAttribute('aria-hidden', 'false');
    }else{
        setSuccessFor(username);
        usererror.setAttribute('aria-hidden', 'true');
    }


    if (firstValue === ''){
        setErrorFor(first, "ERROR: First name cannot be empty.", "blank")
        firsterror.setAttribute('aria-hidden', 'false');
    }else{
        setSuccessFor(first);
        firsterror.setAttribute('aria-hidden', 'true');
    } 
    
    
    if (lastVaiue === ''){
        setErrorFor(last, "ERROR: Last name cannot be empty.", "blank")
        lasterror.setAttribute('aria-hidden', 'false');
    }else{
        setSuccessFor(last);
        lasterror.setAttribute('aria-hidden', 'true');
    }


    islow = /[a-z]/.test(passwordValue);
    isup = /[A-Z]/.test(passwordValue);
    isnum = /[0-9]/.test(passwordValue)
    passwordLength = passwordValue.length;

    if(passwordValue === '') {
        setErrorFor(password, 'ERROR: Password cannot be blank', "blank");
        passerror.setAttribute('aria-hidden', 'false');
	}else if(!(islow)){
        setErrorFor(password, 'ERROR: Password does not have lowercase letters', "nolow");
        passerror.setAttribute('aria-hidden', 'false');
    }else if(!(isup)){
        setErrorFor(password, 'ERROR: Password does not have uppercase letters', "noup");
        passerror.setAttribute('aria-hidden', 'false');
    }else if(!(isnum)){
        setErrorFor(password, 'ERROR: Password does not have numbers', "nonum");
        passerror.setAttribute('aria-hidden', 'false');
    }else if(passwordLength<8){
        setErrorFor(password, 'ERROR: Password must be equal or greater than 8 characters', "noeight");
        passerror.setAttribute('aria-hidden', 'false');
    }   else {
        setSuccessFor(password);
        passerror.setAttribute('aria-hidden', 'true');
	}
	
	if(password2Value === '') {
        setErrorFor(password2, 'ERROR: Please confirm password', "blank");
        pass2error.setAttribute('aria-hidden', 'false');
	} else if(passwordValue !== password2Value) {
        setErrorFor(password2, 'ERROR: Passwords do not match', "nomatch");
        pass2error.setAttribute('aria-hidden', 'false');
	} else{
        setSuccessFor(password2);
        pass2error.setAttribute('aria-hidden', 'true');
	}
};

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	

form.addEventListener('submit', e => {
	e.preventDefault();

	checkInputs();
});
