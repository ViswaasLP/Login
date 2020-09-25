const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const message1 = document.getElementById('message1');
const message2 = document.getElementById('message2');

flag = 0;

// errorcase() handles the case when the form fields are invalid.
function errorcase(input, message, mode){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control ' + mode;
};

// successcase() is the case when the form field is valid
function successcase(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = '';
	formControl.className = 'form-control success';
}

//checkInputs() checks if the form fields contain valid/invalid inputs.
function checkInputs(){
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    if (usernameValue === ''){
        errorcase(username, "ERROR: Username cannot be empty.", "blank")
        message1.setAttribute('aria-hidden', 'false');
        flag = 1;
    }else{
        successcase(username);
        message1.setAttribute('aria-hidden', 'true');
    }

    if(passwordValue === '') {
        errorcase(password, 'ERROR: Password cannot be empty.', "blank");
        message2.setAttribute('aria-hidden', 'false');
	}else {
        successcase(password);
        message2.setAttribute('aria-hidden', 'true');
    }
};

form.addEventListener('submit', e => {
    e.preventDefault();
	if(username.value==="level" && password.value === "Access123"){

        alert("Hello level! You have signed in!");
        location.reload();
        
    }else if((username.value!="level" && password.value != '' && username.value!='') || (username.value==="level" && password.value != "Access123"&& password.value != '' )){

        alert("Sorry! The user/password combination doesn't exist");
    }
    checkInputs();
});

