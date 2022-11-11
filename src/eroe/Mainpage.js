import React from "react";
import "./css/Mainpage.css";
import Location from "./Location";
import User from "./User";
import Call from "./Call";
import { Link, useNavigate } from "react-router-dom";

function Mainpage() {
  const navigate = useNavigate("");
  return (
    <div style={{ width: "100%" }}>
      <div className="stand">
        <div className="map">
          <Location />
        </div>
        <div className="human">
          <User />
        </div>
      </div>
      <footer className="call">
        긴급 전화 번호
        <button className="user_add_button" onClick={() => {
          navigate("/mainpage/adduser");
        }}> 사용자 추가</button>
        <button className="report_button" onClick={() => {
            navigate("/mainpage/report");
          }}> 신고하기</button>
      </footer>
    </div>
  );
}

export default Mainpage;
