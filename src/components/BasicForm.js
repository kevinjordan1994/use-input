import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const firstNameInput = useInput((value) => value.trim() !== "");
  const lastNameInput = useInput((value) => value.trim() !== "");
  const emailInput = useInput(
    (value) => value.includes("@") && value.includes(".")
  );

  const generateInputClasses = (validator) => {
    return validator ? "form-control invalid" : "form-control";
  };

  const formIsValid =
    firstNameInput.isValid && lastNameInput.isValid && emailInput.isValid;

  const formSubmitHandler = (event) => {
    event.preventDefault();
    firstNameInput.reset();
    lastNameInput.reset();
    emailInput.reset();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={generateInputClasses(firstNameInput.displayError)}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstNameInput.value}
            onChange={firstNameInput.changeHandler}
            onBlur={firstNameInput.blurHandler}
          />
          {firstNameInput.displayError && (
            <p className="error-text">Please enter a valid first name.</p>
          )}
        </div>
        <div className={generateInputClasses(lastNameInput.displayError)}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastNameInput.value}
            onChange={lastNameInput.changeHandler}
            onBlur={lastNameInput.blurHandler}
          />
          {lastNameInput.displayError && (
            <p className="error-text">Please enter a valid last name.</p>
          )}
        </div>
      </div>
      <div className={generateInputClasses(emailInput.displayError)}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="email"
          value={emailInput.value}
          onChange={emailInput.changeHandler}
          onBlur={emailInput.blurHandler}
        />
        {emailInput.displayError && (
          <p className="error-text">Please enter a valid e-mail address.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
