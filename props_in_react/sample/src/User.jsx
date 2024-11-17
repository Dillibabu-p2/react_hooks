import React from "react";

function User({ name, age, PhoneNo, email }) {
  return (
    <>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{PhoneNo}</h1>
      <h1>{email}</h1>
    </>
  );
}

export default User;
