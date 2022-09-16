import React from "react";
import "./css/Mainpage.css";
import Map from "./Map"

function Mainpage() {
  return (
    <div style={{ width: "100%" }}>
      <div className="stand">
        <Map/>
        <div className="human">human1</div>
      </div>
      <footer className="call">call</footer>
    </div>
  );
}

export default Mainpage;
