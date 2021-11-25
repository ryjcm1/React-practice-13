import { useState } from "react";

const useSimpleInput = (valueCondition) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueChangeHandler = (evt) => {
    setEnteredValue(evt.target.value);
  };

  const touchHandler = (evt) => {
    setIsTouched(true);
  };

  let valueIsValid = false;

  if (valueCondition(enteredValue)) {
    valueIsValid = true;
  } else {
    valueIsValid = false;
  }

  const reset = () =>{
    setEnteredValue('')
    setIsTouched(false)
  }
  
  const nameClasses = !valueIsValid && isTouched ? 'form-control invalid' : 'form-control'

  return {
    enteredValue,
    isTouched,
    valueChangeHandler,
    touchHandler,
    valueIsValid,
    reset,
    nameClasses
  };
};
export default useSimpleInput;
