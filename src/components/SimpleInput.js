import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: nameValue,
    valueIsValid: nameIsValid,
    displayError: displayNameError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    valueSubmitHandler: nameSubmitHandler,
  } = useInput((value) => value.trim() !== "" && value.length >= 5);

  const {
    value: emailValue,
    valueIsValid: emailIsValid,
    displayError: displayEmailError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    valueSubmitHandler: emailSubmitHandler,
  } = useInput((value) => value.trim() !== "" && value.includes("@"));

  const formIsValid = nameIsValid && emailIsValid;

  function sumbitFormHandler(event) {
    event.preventDefault();
    nameSubmitHandler();
    emailSubmitHandler();
  }

  const inputClasses = (condition) => {
    return condition ? "form-control invalid" : "form-control";
  };

  return (
    <form onSubmit={sumbitFormHandler}>
      <div className={inputClasses(displayNameError)}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={nameValue}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
      </div>
      {displayNameError && (
        <p className="error-text">Please enter a valid name!</p>
      )}
      <div className={inputClasses(displayEmailError)}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
      </div>
      {displayEmailError && (
        <p className="error-text">Please enter a valid email!</p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
