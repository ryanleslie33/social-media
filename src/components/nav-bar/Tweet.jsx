import React from "react";

function Tweet(){
  let tweetStyle = {
    display: "inline",
    float: "right",
  }

  let inputStyle = {
    borderRadius: "25px"
  }

  return (
  <div style={tweetStyle}>
    <input style={inputStyle} placeholder="Tweet..." type="text"/>
  </div>
  );
}

export default Tweet;
