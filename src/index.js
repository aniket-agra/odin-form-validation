import {addValidators} from "./validators";
import "./style.css";

let emailElem = document.querySelector("input#email");
console.log(emailElem);
let emailValidators = {
  "type" : "Please enter a valid email.",
  "short" : "Email addresses should be at least 5 characters long."
};

emailElem.setAttribute("minlength", "5");

emailElem.addEventListener("input", e => {
  addValidators(e.target, emailValidators);
  e.target.reportValidity();
});

let submitBtn = document.querySelector("form > button");
submitBtn.addEventListener("click", e => {
  e.preventDefault();
  let validForm = true;
  document.querySelectorAll("form > input").forEach(e => {validForm = validForm && e.validity.valid});
  if (validForm)
    alert("Well Done!!");
});