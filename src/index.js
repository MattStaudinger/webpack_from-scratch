import "../js/first.js";
import "../js/second.js";
import "../js/third.js";

import "../css/main.less";

const loginButton = document.createElement("button");
loginButton.innerText = "Login";
loginButton.setAttribute("id", "login_btn");

const registerButton = document.createElement("button");
registerButton.innerText = "Register";
registerButton.setAttribute("id", "register_btn");

const div = document.createElement("div");
div.setAttribute("id", "div");

const body = document.getElementsByTagName("body")[0];

body.appendChild(loginButton);
body.appendChild(registerButton);
body.appendChild(div);

loginButton.addEventListener("click", function () {
  import(/*webpackChunkName: "login"*/ "../js/login").then((module) => {
    console.log("module: ", module);
    module.loginPage();
  });
});
registerButton.addEventListener("click", function () {
  import(/*webpackChunkName: "register"*/ "../js/register").then((module) => {
    console.log("module: ", module);
    module.registerPage();
  });
});
