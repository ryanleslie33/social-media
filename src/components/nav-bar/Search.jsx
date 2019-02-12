import React from "react";

function Search(){
  let search = {
    display: "inline",
    float: "right",
    borderRadius: "25px"
  }

  let inputStyle = {
    borderRadius: "25px",
    marginRight: "15px"
  }

  return (
    <div style={search}>
      <input style={inputStyle} placeholder="Search..." type="text"/>
    </div>
    );
  }

export default Search;
