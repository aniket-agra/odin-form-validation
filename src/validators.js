// functions to add validator to element

function addValidators(e, validators) {
  let validMsg = "";
  for (let key in validators) {
    switch(key) {
      case "type" : e.validity.typeMismatch ? validMsg += (validators[key] + "\n") : ""; break;
      case "pattern" : e.validity.patternMismatch ? validMsg += (validators[key] + "\n") : ""; break;
      case "long" : e.validity.tooLong ? validMsg += (validators[key] + "\n") : ""; break;
      case "short" : e.validity.tooShort ? validMsg += (validators[key] + "\n") : ""; break;
      case "underflow" : e.validity.rangeUnderflow ? validMsg += (validators[key] + "\n") : ""; break;
      case "overflow" : e.validity.rangeOverflow ? validMsg += (validators[key] + "\n") : ""; break;
      case "missing" : e.validity.valueMissing ? validMsg += (validators[key] + "\n") : ""; break;
      case "valid" : e.validity.valid ? validMsg += (validators[key] + "\n") : ""; break;
    }
  }
  e.setCustomValidity(validMsg);
}

export {addValidators};