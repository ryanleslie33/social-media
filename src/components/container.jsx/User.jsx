import React from "react";

function User(){
  let user = {
    width: "100px",
     border: "5px solid green",
     padding: "25px",
     margin: "25px",
   }


  return (
  <div style = {user} >
    <h3>Kellie A. Corrigan</h3>
  </div>
  );
}

export default User;
