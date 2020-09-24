const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const message1 = document.getElementById('message1');
const message2 = document.getElementById('message2');

flag = 0;

function setErrorFor(input, message, mode){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control ' + mode;
};


function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
    
function checkInputs(){
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    if (usernameValue === ''){
        setErrorFor(username, "ERROR: Username cannot be empty.", "blank")
        message1.setAttribute('aria-hidden', 'false');
        flag = 1;
    }else{
        setSuccessFor(username);
        message1.setAttribute('aria-hidden', 'true');
    }

    if(passwordValue === '') {
        setErrorFor(password, 'ERROR: Password cannot be blank', "blank");
        message2.setAttribute('aria-hidden', 'false');
	}else {
        setSuccessFor(password);
        message2.setAttribute('aria-hidden', 'true');
    }
};
form.addEventListener('submit', e => {
    e.preventDefault();
	if(username.value==="level" && password.value === "Access123"){

        alert("Hello level! You are now logged in!");
        location.reload();
        
    }else if((username.value!="level" && password.value != '' && username.value!='') || (username.value==="level" && password.value != "Access123"&& password.value != '' )){

        alert("Sorry! The user/password combination doesn't exist");
    }
    checkInputs();
});

