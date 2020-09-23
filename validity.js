const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');


function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
};

function checkInputs(){
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue === ''){
        setErrorFor(username, "Username cannot be empty.")
    }else{
        setSuccessFor(username);
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
