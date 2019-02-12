import React from "react";

function About(){
  let user = {
    width: "100px",
     border: "5px solid green",
     padding: "25px",
     margin: "25px",
   }


  return (
  <div style = {user} >
    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  </div>
  );
}

export default About;
