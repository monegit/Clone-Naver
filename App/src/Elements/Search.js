import React from "react";
import Logo from "../img/Logo.png";

function Search() {
  return (
    <div>
      {/* <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ flex: 1, backgroundColor: "red", width: 100 }} />
        <div style={{ flex: 1, backgroundColor: "blue", width: 100 }} />
        <div style={{ flex: 1, backgroundColor: "green", width: 100 }} />
      </div> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0px 24px",
        }}
      >
        <img src={Logo} style={{ width: "400px", height: "150px" }} />
        <input
          style={{
            flex: 1,
            maxWidth: "600px",
            height: "52px",
            border: "solid 2px #19ce60",
            borderRadius: "3px",
            fontWeight: "bold",
            fontSize: "18px",
            marginLeft:"-75px",
            
          }}
        />
      </div>
    </div>
  );
}

export default Search;
