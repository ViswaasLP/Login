const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const first = document.getElementById('first');
const last = document.getElementById('last');

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
    }else{
        setSuccessFor(username);
    }
    if (firstValue === ''){
        setErrorFor(first, "ERROR: First name cannot be empty.", "blank")
    }else{
        setSuccessFor(first);
    }    
    if (lastVaiue === ''){
        setErrorFor(last, "ERROR: Last name cannot be empty.", "blank")
    }else{
        setSuccessFor(last);
    }
    islow = /[a-z]/.test(passwordValue);
    isup = /[A-Z]/.test(passwordValue);
    isnum = /[0-9]/.test(passwordValue)
    passwordLength = passwordValue.length;

    if(passwordValue === '') {
		setErrorFor(password, 'ERROR: Password cannot be blank', "blank");
	}else if(!(islow)){
        setErrorFor(password, 'ERROR: Password does not have lowercase letters', "nolow");
    }else if(!(isup)){
        setErrorFor(password, 'ERROR: Password does not have uppercase letters', "noup");
    }else if(!(isnum)){
        setErrorFor(password, 'ERROR: Password does not have numbers', "nonum");
    }else if(passwordLength<8){
        setErrorFor(password, 'ERROR: Password must be equal or greater than 8 characters', "noeight");
    }   else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'ERROR: Please confirm password', "blank");
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match', "nomatch");
	} else{
		setSuccessFor(password2);
	}
};

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	

form.addEventListener('submit', e => {
	e.preventDefault();
	if(username==='level' && password === 'Access123'){
        alert("Hello Mr. Level!");
    }
	checkInputs();
});
