import React from "react";
import "./css/Topbar.css";
import notifi from "./img/notification.png";
import { useRef } from "react";
import user from "./img/user.png";
import { Link, useNavigate } from "react-router-dom";

function Topbar() {
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="Topbarstyle"
        style={{ position: "relative", zIndex: "2" }}
      >
        <div>
          <input type="checkbox" id="check_box" />
          <label htmlFor="check_box">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <div id="side_menu">
            <div
              className="side_odd"
              onClick={() => {
                navigate("/mainpage/mypage");
              }}
            >
              mypage
            </div>
            <div
              className="side_even"
              onClick={() => {
                navigate("/mainpage/modifyuserinfo");
              }}
            >
              환자정보 수정
            </div>
            <div
              className="side_odd"
              onClick={() => {
                navigate("/mainpage/report");
              }}
            >
              신고하기
            </div>
            <div
              className="side_even"
              onClick={() => {
                navigate("/mainpage/setting");
              }}
            >
              설정
            </div>
          </div>
        </div>
        <div
          className="Eroetext"
          onClick={() => {
            navigate("/mainpage/main");
          }}
        >
          <div>eroe</div>
        </div>
        <img
          className="topbarimg"
          id="notifiimg"
          src={notifi}
          alt="notifi"
          onClick={() => {
            navigate("/mainpage/notice");
          }}
        />
        <img
          className="topbarimg"
          id="userimg"
          src={user}
          alt="user"
          onClick={() => {
            navigate("/mainpage/mypage");
          }}
        />
      </div>
    </div>
  );
}
export default Topbar;
