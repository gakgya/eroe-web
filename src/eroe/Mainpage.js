import React from "react";
import "./css/Mainpage.css";
import Location from "./Location";
import User from "./User";
import Call from "./Call";
import user_add from "./img/user_add.png";
import report from "./img/report.png";
import { Link, useNavigate } from "react-router-dom";

function Mainpage() {
  const navigate = useNavigate("");
  return (
    <div style={{ width: "100%" }}>
      <div className="stand">
        <div className="map">
          <Location />
        </div>
        <div >
          <User />
        </div>
      </div>
      <footer className="call">
        <div
          className="user_add_button"
          onClick={() => {
            navigate("/mainpage/adduser");
          }}
        >
          <img src={user_add} alt="user_add" />
          <br />
          사용자 추가
        </div>

        <div
          className="report_button"
          onClick={() => {
            navigate("/mainpage/report");
          }}
        >
          <img src={report} alt="report" />
          <br />
          신고하기
        </div>
      </footer>
    </div>
  );
}

export default Mainpage;
