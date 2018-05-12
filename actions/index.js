export const CHECK_FORM = 'CHECK_FORM_ERRORS';

export function checkForm(formErrors = {}) {
  return {
    type: CHECK_FORM,
    formErrors
  }
}
