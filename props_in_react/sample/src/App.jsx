import React from "react";
import User from "./User";

function App() {
  const userData = {
    name: "Babu",
    age: "23",
    PhoneNo: "32842948",
    email: "djsf@gmail.com",
  };

  return (
    <>
      <User {...userData, userData.name="sdfsd"} />
    </>
  );
}

export default App;
