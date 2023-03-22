// Login and Signup buttons
const loginButton = document.getElementById("login-button");
const signupButton = document.getElementById("signup-button");

// Return from Login
const loginBackButton = document.getElementById("back-login-sec");

// Sections listing
const mainSec = document.getElementById("main");
const loginSec = document.getElementById("login-sec");

loginButton.onclick = function () {
  loadBack("/static/images/bg/antebellum.jpeg");
  $(mainSec).fadeOut(1000);
  $(loginSec).fadeIn(1000);
}

loginBackButton.onclick = function () {
  loadBack("/static/images/bg/fall.jpeg");
  $(loginSec).fadeOut(1000);
  $(mainSec).fadeIn(1000);
}