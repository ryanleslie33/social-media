import React from "react";
import NavBar from "./nav-bar/NavBar";
import Profile from "./container.jsx/Profile";


function App(){
  let appStyle = {
    textAlign: "center",
    display: "grid",
    gridGap: "10px",
   gridTemplateColumns:" 1fr 0.3fr 0.7fr",

  }
  return (
    <div>
      <h1 style={appStyle}>Social Media</h1>
      <NavBar/>
      <Profile/>
    </div>
  );
}

export default App;
