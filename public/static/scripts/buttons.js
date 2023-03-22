// Login and Signup buttons
const loginButton = document.getElementById("login-button");
const signupButton = document.getElementById("signup-button");

// Return from Login
const loginBackButton = document.getElementById("back-login-sec");
const signupBackButton = document.getElementById("back-signup-sec");

// Sections listing
const mainSec = document.getElementById("main");
const loginSec = document.getElementById("login-sec");
const signupSec = document.getElementById("signup-sec");

// Login and Back

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

// Signup and Back

signupButton.onclick = function () {
  loadBack("/static/images/bg/hallways.jpeg");
  $(mainSec).fadeOut(1000);
  $(signupSec).fadeIn(1000);
}

signupBackButton.onclick = function () {
  loadBack("/static/images/bg/fall.jpeg");
  $(signupSec).fadeOut(1000);
  $(mainSec).fadeIn(1000);
}