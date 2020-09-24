const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
	if(username.value==="level" && password.value === "Access123"){
        alert("Hello Mr. Level!");
    }else{
        alert("Sorry! The user/password combination doesn't exist");
    }
});