import React, { useEffect,useState, useRef } from "react";

const SimpleInput = (props) => {
    //  const nameInputRef = useRef()
  const [enteredName, setEnteredName] = useState("");
  const[enteredNameIsValid,setEnteredNameIsValid] = useState(false);
  const[enteredNameIsTouched,setEnteredNameIsTouched]=useState(false);

  useEffect(()=>{
    if(enteredNameIsValid){
        console.log('valid')
    }
  },[enteredNameIsValid])

  const inputNameHandler = (event) => {
    setEnteredName(event.target.value);
    
    if(event.target.value!==""){
        setEnteredNameIsValid(true)
    }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameIsTouched(true)

if(enteredName===""){
    setEnteredNameIsValid(false)
    return;
}
setEnteredNameIsValid(true)

 //  const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);
    //  setEnteredName('')
  }
  const enteredNameIsInvalid = !enteredNameIsValid && enteredNameIsTouched;
  const inputNameClasses = enteredNameIsInvalid ? 'form-control invalid': 'form-control';

  

  const inputNameBlurHandler=()=>{
    setEnteredNameIsTouched(true);
    if(enteredName===""){
        setEnteredNameIsValid(false)
    }
}

  return (
    <form onSubmit={formSubmissionHandler}>
        {/* <div className="form-control"> */}
      <div className = {inputNameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
        //    ref = {nameInputRef}
          type="text"
          id="name"
          onChange={inputNameHandler}
          onBlur={inputNameBlurHandler}
          value={enteredName}
        />
       {enteredNameIsInvalid&&<p className="error-text">Entered name is invalid</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};
export default SimpleInput;
