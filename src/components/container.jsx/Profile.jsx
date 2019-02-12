import React from "react";
import User from "./User";
import About from "./About";
import Happening from "./Happening";

function Profile(){
  let profile = {
    
    float: "right",
  }


  return (
  <div >
    <User/>
    <Happening/>
    <About/>
  </div>
  );
}

export default Profile;
