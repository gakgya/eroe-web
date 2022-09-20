import React from "react";
import "./css/Mainpage.css";
import Location from "./Location";

function Mainpage() {
  return (
    <div style={{ width: "100%" }}>
      <div className="stand">
        <div className="map">map</div>
        <div className="human">human1</div>
      </div>
      <footer className="call">call</footer>
    </div>
  );
}

export default Mainpage;