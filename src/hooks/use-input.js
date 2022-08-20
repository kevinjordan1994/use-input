import { useState } from "react";

export default function useInput(validation) {
  const [value, setValue] = useState("");
  const [wasTouched, setWasTouched] = useState(false);

  const isValid = validation(value);
  const displayError = !isValid && wasTouched;

  const changeHandler = (event) => {
    setValue(event.target.value);
    setWasTouched(true);
  };

  const blurHandler = () => {
    setWasTouched(true);
  };

  const reset = () => {
    setValue("");
    setWasTouched(false);
  };

  return {
    value,
    isValid,
    displayError,
    changeHandler,
    blurHandler,
    reset,
  };
}
