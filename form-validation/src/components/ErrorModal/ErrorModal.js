import React, { Fragment } from "react";
import Button from "../UI/Button";
import error from "./ErrorModal.module.css";
import ReactDOM from "react-dom";
const Overlay = (props) => <div className={error.overlay} />;
const Modal = (props) => (
  <div className={error.modal}>
    <header className={error.header}>
      <h2>{props.title}</h2>
    </header>
    <div className={error.content}>
      <p>{props.message}</p>
    </div>
    <footer className={error.actions}>
      <Button onClick={props.onConfirm} type={"button"}>
        Okay
      </Button>
    </footer>
  </div>
);
const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Overlay onClick={props.onConfirm} />,
        document.getElementById("overlay-root")
      )}
      {ReactDOM.createPortal(
        <Modal
          onConfirm={props.onConfirm}
          title={props.title}
          message={props.message}
        />,
        document.getElementById("modal-root")
      )}
    </Fragment>
  );
};

export default ErrorModal;
