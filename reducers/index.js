import {CHECK_FORM_ERRORS} from '../actions';

export function formErrors(state = {}, action) {
  switch (action.type) {
    case CHECK_FORM_ERRORS:
      return action.formErrors;
    default:
      return state;
  }
}
