import Container from "./components/UI/Container";
import FormInput from "./components/FormInput/FormInput";
import FormList from "./components/FormList/FormList";
import React, { useState } from "react";
const App = () => {
  const [userDatabase, setUserDatabase] = useState([]);
  const [userDatabaseStatus, setUserDatabaseStatus] = useState(true);
  const saveUserData = (data) => {
    const userData = {
      ...data,
      id: Math.random() * 10 + 1,
    };
    setUserDatabase((prevUsers) => {
      return [...prevUsers, userData];
    });
    setUserDatabaseStatus(false);
  };
  return (
    <Container>
      <FormInput onSaveUserData={saveUserData} />
      <FormList userDBStatus={userDatabaseStatus} userDB={userDatabase} />
    </Container>
  );
};

export default App;
