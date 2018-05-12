# Simple Redux Form Checker

This is a simple module that provides a function for redux form validation, along with the necessary action and reducer. If you are looking for a very simple way to validate a Redux form before submitting it to the backend, this may be helpful. In case you are in search of a more sofisticated solution, this is not for you, sorry.

## How to use this module
You may download this repo and add it to your project, or you may install it using `npm install`, it is up to you.
Either way you choose, once you have it, you will need to add `formErrors` to your reducers. In the component where you will have the form you would like to validate, you will need to import `checkFormErrors`, which is an action creator, and `validateForm`, which is a function that checks if the inputs of your form and returns a promise. You may provide the function to submit your form if it is all right, and an `errors` parameters to `catch` and `checkFormErrors` if it is not all right.

Example:

`validateForm(formInputs, minLength)
    .then(()=> {/*Whatever you want to do if the form passess */} )
    /* Of course, you can chain other then's */
    .catch((errors) => this.props.checkFormErrors(errors));`

Besides `checkFormErrors` and `validateForm`, you need to pass `formErrors` to your `mapStateToProps` function.
