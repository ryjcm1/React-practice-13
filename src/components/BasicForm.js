import useSimpleInput from "../hooks/use-simple-input";

const BasicForm = (props) => {
  const {
    enteredValue: enteredEmail,
    isTouched: emailIsTouched,
    touchHandler: emailTouchHandler,
    valueChangeHandler: emailChangeHandler,
    valueIsValid: emailIsValid,
    reset: emailReset,
    nameClasses: emailClasses
  } = useSimpleInput((value) => value.includes("@"));

  const {
    enteredValue: enteredFirstName,
    isTouched: firstNameIsTouched,
    touchHandler: firstNameTouchHandler,
    valueChangeHandler: firstNameChangeHandler,
    valueIsValid: firstNameIsValid,
    reset: firstNameReset,
    nameClasses: firstNameClasses
  } = useSimpleInput((value) => value.trim() !== "");

  const {
    enteredValue: enteredLastName,
    isTouched: lastNameIsTouched,
    touchHandler: lastNameTouchHandler,
    valueChangeHandler: lastNameChangeHandler,
    valueIsValid: lastNameIsValid,
    reset: lastNameReset,
    nameClasses: lastNameClasses
  } = useSimpleInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (emailIsValid && firstNameIsValid && lastNameIsValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  const formSubmission = (evt) => {
    evt.preventDefault();

    if (!emailIsValid || !firstNameIsValid || !lastNameIsValid) {
      return;
    } else {
      console.log(enteredEmail);
      console.log(enteredFirstName);
      console.log(enteredLastName);

      emailReset();
      firstNameReset();
      lastNameReset();
    }
  };


  return (
    <form onSubmit={formSubmission}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameTouchHandler}
            value={enteredFirstName}
          />
          {!firstNameIsValid && firstNameIsTouched && (
            <p className="error-text">First name can not be empty.</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameTouchHandler}
            value={enteredLastName}
          />
          {!lastNameIsValid && lastNameIsTouched && (
            <p className="error-text">Last name can not be empty.</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailTouchHandler}
          value={enteredEmail}
        />
        {!emailIsValid && emailIsTouched && (
          <p className="error-text">Input must be an email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
