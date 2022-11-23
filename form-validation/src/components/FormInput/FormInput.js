import formInput from "./FormInput.module.css";
import utility from "../UI/Utility.module.css";
import Button from "../UI/Button";
import React, { useState, useRef } from "react";
import ErrorModal from "../ErrorModal/ErrorModal";

const FormInput = (props) => {
  const userNameRef = useRef();
  const userAgeRef = useRef();
  const [error, setError] = useState();

  const handelSubmitButton = (e) => {
    const userName = userNameRef.current.value;
    const userAge = userAgeRef.current.value;
    e.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age",
      });
      return;
    }
    if (+userAge < 1 || +userAge >= 100) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid name and age",
      });
      return;
    }
    const user = {
      userName: userName,
      userAge: userAge,
    };
    props.onSaveUserData(user);
  };
  // bad practice to modify the DOM by urself
  //just when you have to reset the form
  userNameRef.current.value = "";
  userAgeRef.current.value = "";
  const handelError = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={handelError}
        />
      )}
      <form onSubmit={handelSubmitButton} className={formInput["form-input"]}>
        <div className={utility["form-holder"]}>
          <div className={utility["container"]}>
            <label className={utility.label}>User Name</label>
            <input
              ref={userNameRef}
              className={`${utility["form-holder__input"]}`}
              type="text"
            />
          </div>
        </div>
        <div className={utility["form-holder"]}>
          <div className={utility[`container`]}>
            <label className={utility.label}>Age</label>
            <input
              ref={userAgeRef}
              className={`${utility["form-holder__input"]}`}
              type="number"
            />
          </div>
        </div>
        <Button type={"submit"}>Submit</Button>
      </form>
    </div>
  );
};

export default FormInput;
