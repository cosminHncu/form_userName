import formItem from "./FormItem.module.css";

const FormItem = (props) => {
  const { userName, userAge } = props;

  return (
    <div className={formItem.container}>
      <p className={formItem.textSize}>
        <span className={formItem.userName}> {userName}</span>
        <span className={formItem.userAge}>{`(${userAge} years old)`}</span>
      </p>
    </div>
  );
};

export default FormItem;
