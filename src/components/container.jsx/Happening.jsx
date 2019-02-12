import React from "react";
import UserInput from "./UserInput";

function Happening(){
  let user = {
    width: "200px",
    height:"600px",
     border: "5px solid green",
     padding: "25px",
     margin: "0 auto",
     display: "grid",
     gridGap: "10px",
    gridTemplateColumns:" 1fr 0.3fr 0.7fr",
   }


  return (
  <div style = {user} >
    <UserInput/>
  </div>
  );
}

export default Happening;
