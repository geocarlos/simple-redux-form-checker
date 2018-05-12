export const CHECK_FORM_ERRORS = 'CHECK_FORM_ERRORS';

export function checkFormErrors(formErrors = {}) {
  return {
    type: CHECK_FORM_ERRORS,
    formErrors
  }
}
