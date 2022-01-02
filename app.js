const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form .username");
const popUpText = document.querySelector(".h1");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintText(event) {
  popUpText.innerText = `Hello ${event}`;
  popUpText.classList.remove(HIDDEN_CLASSNAME);
}

function submitForm(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintText(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", submitForm);
} else {
  paintText(savedUsername);
}
