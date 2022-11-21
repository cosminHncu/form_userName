import formList from "./FormList.module.css";
import FormItem from "../FormItem/FormItem";

const FormList = (props) => {
  const userDBMessage = <p className={formList.DBmessage}>No user inserted</p>;

  const userDataBase = props.userDB;

  return (
    <div className={formList.container}>
      {props.userDBStatus === true && userDBMessage}
      {userDataBase.map((user) => (
        <FormItem
          key={user.id}
          userName={user.userName}
          userAge={user.userAge}
        />
      ))}
    </div>
  );
};

export default FormList;
