const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginSubmit(event) {
    evnet.preventDefault();
    console.log(loginInput.value);
    }

loginForm.addEventListener("submit",onLoginSubmit);



