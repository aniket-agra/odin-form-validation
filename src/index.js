import {addValidators} from "./validators";

let emailElem = document.querySelector("input#email");
console.log(emailElem);
let emailValidators = {
  "type" : "Please enter a valid email",
  "short" : "Email addresses should be at least 5 characters long"
};

emailElem.addEventListener("input", e => {
  addValidators(e.target, emailValidators);
  e.target.reportValidity();
});
  