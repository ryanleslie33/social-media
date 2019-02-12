import React from "react";

function UserInput(){
  let user = {
    float: "center",
    width: "100px",
    height:"30px",
     margin: "25px",
     display: "grid",
     gridGap: "10px",
    gridTemplateColumns:" 1fr 0.3fr 0.7fr",
   }


  return (
  <div style = {user} >
      <input placeholder="Whats Happening?" type="text"/>
  </div>
  );
}

export default UserInput;
