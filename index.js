import {checkForm} from './actions';
import {errors} from './reducers';

export const checkFormErrors = checkForm;
export const formErrors = errors;

export function validateForm(formInputs, minLength = {}) {
  return new Promise((res, rej) => {
    const errors = {};
    for (let input of Object.keys(formInputs)) {
      if (formInputs[input] === "") {
        errors[input] = `${input} cannot be blank!`;
      }
      if (minLength[input] && formInputs[input] !== "" && formInputs[input].length < minLength[input]) {
        errors[input] = `${input} must be at least ${minLength[input]} characters long`;
      }
    }
    if (Object.keys(errors).length === 0) {
      res();
    } else {
      rej(errors);
    }
  });
}
