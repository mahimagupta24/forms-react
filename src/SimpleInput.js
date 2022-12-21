import React, { useEffect, useState, useRef } from "react";
import useInput from "./use-input";

const SimpleInput = (props) => {
  //  const nameInputRef = useRef()

  // const {value:enteredName,hasError:nameInputHasError,valueChangeHandler:nameChangeHandler,inputBlurHandler:nameBlurHandler}=useInput(value=>value.trim()!='')
   const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);
  const [enteredEmail,setEnteredEmail] = useState("");
  const[enteredEmailIsTouched,setEnteredEmailIsTouched] = useState(false)

  const enteredNameIsValid = enteredName.trim() !== "";
  const enteredNameIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

  const enteredEmailIsValid =enteredEmail.includes('@');
  const enteredEmailIsInvalid = !enteredEmailIsValid&&enteredEmailIsTouched

  let formIsValid = false

  // useEffect(()=>{
     if(enteredNameIsValid&&enteredEmailIsValid){
      formIsValid = true;
    //  setFormIsValid(true)
  //   }else{
  //     setFormIsValid(false)
  //   }
  // },[setFormIsValid])
     }

  const inputNameHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const inputEmailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const inputNameBlurHandler = () => {
    setEnteredNameIsTouched(true);
  };
  const inputEmailBlurHandler = () => {
    setEnteredEmailIsTouched(true);
  };



  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameIsTouched(true);
    if(!enteredNameIsValid){
      return;
    }

    //  const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);
      setEnteredName('')
      setEnteredNameIsTouched(false)
      setEnteredEmail('')
      setEnteredEmailIsTouched(false)
  };
  
  const inputNameClasses = enteredNameIsInvalid
  ? "form-control invalid"
  : "form-control";

  const inputEmailClasses = enteredEmailIsInvalid
  ? "form-control invalid"
  : "form-control";

 

  return (
    <form onSubmit={formSubmissionHandler}>
      {/* <div className="form-control"> */}
      <div className={inputNameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          //    ref = {nameInputRef}
          type="text"
          id="name"
          onChange={inputNameHandler}
          onBlur={inputNameBlurHandler}
          value={enteredName}
        />
        {enteredNameIsInvalid && (
          <p className="error-text">Entered name is invalid</p>
        )}
      </div>
      <div className={inputEmailClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={inputEmailHandler}
          onBlur={inputEmailBlurHandler}
          value={enteredEmail}
        />
        {enteredEmailIsInvalid && (
          <p className="error-text">Entered email is invalid</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};
export default SimpleInput;
