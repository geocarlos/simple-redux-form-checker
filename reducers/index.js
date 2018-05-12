import {CHECK_FORM} from '../actions';

export function errors(state = {}, action) {
  switch (action.type) {
    case CHECK_FORM:
      return action.formErrors;
    default:
      return state;
  }
}
