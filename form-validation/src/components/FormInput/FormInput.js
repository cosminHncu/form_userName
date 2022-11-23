import formInput from "./FormInput.module.css";
import utility from "../UI/Utility.module.css";
import Button from "../UI/Button";
import React, { useState, Fragment, useRef } from "react";
import ErrorModal from "../ErrorModal/ErrorModal";

const FormInput = (props) => {
  const nameRef = useRef();
  const ageRef = useRef();
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  const handelUserNameInput = (e) => {
    setUserName(e.target.value);
  };

  const handelUserAgeInput = (e) => {
    setUserAge(e.target.value);
  };

  const handelSubmitButton = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
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
    setUserAge("");
    setUserName("");
  };
  const handelError = () => {
    setError(null);
  };

  return (
    <Fragment>
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
              ref={nameRef}
              value={userName}
              onChange={handelUserNameInput}
              className={`${utility["form-holder__input"]}`}
              type="text"
            />
          </div>
        </div>
        <div className={utility["form-holder"]}>
          <div className={utility[`container`]}>
            <label className={utility.label}>Age</label>
            <input
              ref={ageRef}
              value={userAge}
              onChange={handelUserAgeInput}
              className={`${utility["form-holder__input"]}`}
              type="number"
            />
          </div>
        </div>
        <Button type={"submit"}>Submit</Button>
      </form>
    </Fragment>
  );
};

export default FormInput;
