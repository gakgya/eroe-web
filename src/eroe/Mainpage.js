import React from "react";
import "./css/Mainpage.css";
import Location from "./Location";
import User from "./User";
import Call from "./Call";

function Mainpage() {
  return (
    <div style={{ width: "100%" }}>
      <div className="stand">
        <div className="map"><Location/></div>
        <div className="human"><User/></div>
      </div>
      <footer className="call">긴급 전화 번호 <Call/></footer>
    </div>
  );
}

export default Mainpage;