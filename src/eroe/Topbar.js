import React from "react";
import "./css/Topbar.css";
import notifi from "./img/notification.png";
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
          <input type="checkbox" id="check_box"/>
          <label htmlFor="check_box">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <div id="side_menu">
            <ul>
              <li>
                <a href="#">mypage</a>
              </li>
              <li>
                <a href="#">사용자 설정</a>
              </li>
              <li>
                <a href="#">신고하기</a>
              </li>
              <a href="#">설정</a>
            </ul>
          </div>
        </div>
        <div className="Eroetext"onClick = {()=> {
          navigate('/mainpage/main')
        }}>
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
