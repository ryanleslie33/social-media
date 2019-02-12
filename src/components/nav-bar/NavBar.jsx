import React from "react";
import Search from './Search';
import Tweet from './Tweet'


function NavBar(){
  let styles = {
    display: "inline",
    padding:"40px",
    margin:"30px",

  }
  let buttons = {
    backgroundColor:"#42d7f4",
  }

  return (
    <div style={styles}>
      <hr/>
      <button style={buttons}>home</button>
      <button style={buttons}>notifications</button>
      <button style={buttons}>messages</button>
      <Tweet/>
      <Search/>
      <hr/>
    </div>


  );
}

export default NavBar;
