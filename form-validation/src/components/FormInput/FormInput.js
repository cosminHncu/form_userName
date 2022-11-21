import formInput from "./FormInput.module.css";
import utility from "../UI/Utility.module.css";
import React, { useState } from "react";

const FormInput = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const handelUserNameInput = (e) => {
    setUserName(e.target.value);
  };

  const handelUserAgeInput = (e) => {
    setUserAge(e.target.value);
  };

  const handelSubmitButton = (e) => {
    e.preventDefault();
    const user = {
      userName: userName,
      userAge: userAge,
    };
    props.onSaveUserData(user);
    setUserAge("");
    setUserName("");
  };

  return (
    <form onSubmit={handelSubmitButton} className={formInput["form-input"]}>
      <div className={utility["form-holder"]}>
        <div className={utility["container"]}>
          <label className={utility.label}>User Name</label>
          <input
            value={userName}
            onChange={handelUserNameInput}
            className={`${utility["form-holder__input"]}`}
            type="text"
            required
            minLength="4"
            maxLength="7"
          />
        </div>
      </div>
      <div className={utility["form-holder"]}>
        <div className={utility[`container`]}>
          <label className={utility.label}>Age</label>
          <input
            value={userAge}
            onChange={handelUserAgeInput}
            className={`${utility["form-holder__input"]}`}
            type="number"
            required
            maxLength="1"
            min="1"
          />
        </div>
      </div>
      <button className={utility.button}>Submit</button>
    </form>
  );
};

export default FormInput;
