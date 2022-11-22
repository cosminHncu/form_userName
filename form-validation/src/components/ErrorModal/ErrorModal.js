import React from "react";
import Button from "../UI/Button";
import error from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  const handelCloseButton = (e) => {
    props.onConfirm();
  };

  return (
    <div>
      <div onClick={handelCloseButton} className={error.overlay} />
      <div className={error.modal}>
        <header className={error.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={error.content}>
          <p>{props.message}</p>
        </div>
        <footer className={error.actions}>
          <Button onClick={handelCloseButton} type={"button"}>
            Okay
          </Button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModal;
