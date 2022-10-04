import React from "react";
import "./css/Topbar.css";
import menuimg from "./img/menu.png";
import notifi from "./img/notification.png";
import user from "./img/user.png";

function Topbar() {
  return (
    <div>
      <div className="Topbarstyle">
      <div>
        <input type="checkbox" id="check_box" />
        <label for="check_box">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <div id="side_menu">
          <ul>
            <li><a href="#">menu1</a></li>
            <li><a href="#">menu2</a></li>
            <li><a href="#">menu3</a></li>
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
