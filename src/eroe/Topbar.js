import React from "react";
import "./css/Topbar.css";
import notifi from "./img/notification.png";
import user from "./img/user.png";

function Topbar() {
  return (
    <div>
      <div className="Topbarstyle" style={{position: "relative", zIndex: "2"}}>
      <div>
        <input type="checkbox" id="check_box" />
        <label for="check_box">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <div id="side_menu">
          <ul>
            <li><a href="#">mypage</a></li>
            <li><a href="#">사용자 설정</a></li>
            <li><a href="#">신고하기</a></li>
            <a href="#">설정</a>
          </ul>
        </div>
      </div>
        <div className="Eroetext">
          <div>eroe</div>
        </div>
        <img className="topbarimg" id="notifiimg" src={notifi} alt="notifi" />
        <img
          className="topbarimg"
          id="userimg"
          src={user}
          alt="user"
          onClick={{}}
        />
      </div>
    </div>
  );
}
export default Topbar;
